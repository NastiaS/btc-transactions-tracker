import C from './constants'

let addressData = {
	relevantData: [],
	balance: 5
};

const transformValue = (value, inputBool) => {
	value = inputBool ? value / (Math.pow(10, 8)) : -(value / (Math.pow(10, 8)));
	addressData.balance += value;
	return value;
};

const constructJSON = (inputBool, el, value) => {
	let dataPoint = {
		"isInput" : inputBool,
		"isOutput": !inputBool,
		"value": transformValue(value, inputBool),
		"date": el.received_at,
		"hash": el.hash
	};
	return dataPoint;
};

export const processData = (data, address) => {
	data.map((el) => {
		let totalValue = 0, isRelevant = false, isInput = false;
		el.inputs.map((input_el) => {
			if (input_el.address.match(address)) {
				isRelevant = true;
				isInput = true;
				totalValue += input_el.value;
			}
		});
		el.outputs.map((output_el) => {
			if (output_el.address.match(address)){
				isRelevant = true;
				isInput = false;
				totalValue += output_el.value;
			}
		});
		isRelevant ? 
			addressData.relevantData.push(constructJSON(isInput, el, totalValue)) : null;
	});
	return addressData;
}

export const clearNotificationFunc = (next, id) => 
	setTimeout( () => {
		return next({
			type: C.CLEAR_NOTIFICATION_BANNER,
			payload: id
		})
	}, 3000)

export const addNotificationFunc = (next, payload) => {
	return next({
		type: C.ADD_NOTIFICATION_BANNER,
		payload: payload
	})  
}
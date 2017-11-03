import request from 'superagent'
import C from './constants'
import { addNotificationFunc, processData } from './helperFunctions'
// import sampleData from './data/sampleD.json'

let uniqid = require('uniqid');

const dataService = store => next => action => {
	if(!action.meta || action.meta.type !== 'api'){
		return next(action);
	}else{
		switch (action.type) {
			case C.GET_BITCOIN_BALANCE:
					let myUrl = action.meta.url + action.payload + '/transactions?noToken=true';
				return request
					.get(myUrl)
					.end((err, res) => {
						if (err) {
							let payload = { '_id': uniqid(), 'type': 'error', 'entity': 'getBalance', 'message': 'We are sorry! We could not retrieve your transactions' };
							return addNotificationFunc(next, payload)
						}
						const data = JSON.parse(res.text)
						// const data = sampleData;
						if(data.txs.length >0) {
							let result = processData(data.txs, action.payload)
							next({ type: C.GET_BALANCE_DATA_RECEIVED, result })
							next({ type: C.TOGGLE_ADDRESS_FORM })
						}else {
							let payload = { '_id': uniqid(), 'type': 'error', 'entity': 'getBalance', 'message': 'We are sorry! There was a problem with the given address' };
							return addNotificationFunc(next, payload)
						}
				})
			default:
			break
		}
	}
};

export default dataService

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
					console.log('my url: ', action.meta.url + action.payload + '/transactions?noToken=true')
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
						let result = processData(data.txs, action.payload)
						next({ type: C.GET_BALANCE_DATA_RECEIVED, result })
						next({ type: C.TOGGLE_ADDRESS_FORM })

				})		
			default:
			break
		}
	}
};

export default dataService

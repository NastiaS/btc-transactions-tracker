import C from '../constants'

export default (state = {}, action) => {
	
	switch (action.type) {

	case C.UPDATE_BITCOIN_ADDRESS:
		return {
			...state, 
			address: action.payload.address
		}
	case C.CLEAR_ADDRESS_FORM:
		return {
			...state,
			address: ""
		}
	case C.PERFORM_TABLE_SORT: 
		return {
			...state,
			transactions: action.payload.data,
			direction: action.payload.direction
		}

	case C.UPDATE_TABLE_SORT_ORDER:
		return {
			...state,
			transactions: action.payload.data,
			direction: action.payload.direction,
			column: action.payload.column
		}
	case C.GET_BALANCE_DATA_RECEIVED: 
		return {
			...state,
			transactions: action.result.relevantData,
			balance: action.result.balance
		}
		default:
			return state
	}
}
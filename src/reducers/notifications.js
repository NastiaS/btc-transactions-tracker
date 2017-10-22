import C from '../constants'

const notifications = (state = [], action) => {
	switch (action.type) {
		case C.ADD_NOTIFICATION_BANNER:
			return[ 
				...state, action.payload
			]
		case C.CLEAR_NOTIFICATION_BANNER: 
			return state.filter((notification) => notification._id !== action.payload)
		default:
			return state
	}
}

export default notifications
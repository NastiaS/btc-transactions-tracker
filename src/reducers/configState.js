import C from '../constants'

export default (state = {}, action) => {
	
	switch (action.type) {
		case C.CHOSE_NAV_BAR_ITEM:
			return { 
				...state, 
				navBarMenu: {
					...state.navBarMenu,
					activeItem: action.payload 
				}
			}

		case C.TOGGLE_ADDRESS_FORM:
			return {
				...state,
				toggleAddressForm: !state.toggleAddressForm
			}
		default:
			return state
	}
}

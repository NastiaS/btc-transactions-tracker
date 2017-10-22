import C from './constants'

export const updateBitcoinAddress = (address) => 
	({
		type: C.UPDATE_BITCOIN_ADDRESS,
		payload: address
	})

export const getBitcoinBalance = (address) => 
	({
		type: C.GET_BITCOIN_BALANCE,
		payload: address,
		meta: { type: 'api', url: C.get_bitcoin_balance_url }
	})
	
export const updateTableSortOrder = (sortParams) => 
	({
		type: C.UPDATE_TABLE_SORT_ORDER,
		payload: sortParams
	})

export const performTableSort = (sortParams) => 
	({
		type: C.PERFORM_TABLE_SORT,
		payload: sortParams
	})

export const handleNavBarClick = (name) =>
	({
		type: C.CHOSE_NAV_BAR_ITEM,
		payload: name
	})

export const clearNotificationBanner = (id) =>
	({
		type: C.CLEAR_NOTIFICATION_BANNER,
		payload: id
	})

export const toggleAddressForm = () => 
	({
		type: C.TOGGLE_ADDRESS_FORM
	})

export const clearAddressForm = () =>
	({
		type: C.CLEAR_ADDRESS_FORM
	})
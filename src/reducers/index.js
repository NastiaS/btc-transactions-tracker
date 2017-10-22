import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import bitcoinAddressInfo from './bitcoinAddressInfo'
import configState from './configState'
import notifications from "./notifications"

export default combineReducers({
	router: routerReducer,
	configState,
	bitcoinAddressInfo,
	notifications
})
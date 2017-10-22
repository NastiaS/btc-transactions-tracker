import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

import rootReducer from './reducers'
import dataService from './api'

export const history = createHistory()

const consoleMessages = store => next => action => {
	let result

	console.groupCollapsed(`dispatching action => ${action.type}`)

	result = next(action)

	let { router,  configState, bitcoinAddressInfo } = store.getState()

	console.log(`
		location: ${router.location.pathname}
		bitcoinAddressBalance: ${bitcoinAddressInfo.balance}
		bitcoinAddress: ${bitcoinAddressInfo.address}
		navbar: ${configState.navBarMenu.activeItem}
	`)

	console.groupEnd()

	return result

}


const enhancers = []
const middleware = [
	thunk,
	routerMiddleware(history),
	dataService,
	consoleMessages	
]


const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
)

export default (initialState={}) => {
	return composedEnhancers(createStore)(rootReducer, initialState)
}

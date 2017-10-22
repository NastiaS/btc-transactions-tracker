import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import storeFactory, { history } from './store'
import App from './components'
import sampleData from './initialState'

import 'sanitize.css/sanitize.css'
import './index.css'

const initialState = (localStorage["redux-store"]) ?
	JSON.parse(localStorage["redux-store"]) :
	sampleData

const store = storeFactory(initialState)

window.React = React
window.store = store

const target = document.querySelector('#root')

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
		  <Router>
			<App />
		  </Router>
		</ConnectedRouter>
	</Provider>,
	target
)
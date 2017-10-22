import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './containers/home'
import NavBar from './containers/common/navbar'
import GetStarted from './containers/getStarted'


class App extends React.Component {
	render() {
		return (			
			<div>
				<NavBar />				
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/get-started" component={GetStarted} />
					<Route path="*" component={Home} />
				</Switch>				
			</div>			
		)
	}

}
export default App

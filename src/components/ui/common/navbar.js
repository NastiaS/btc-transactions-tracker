import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const NavBar = props => (
	<div>
		<Menu pointing icon className="ldg-navbar-menu">
			<Menu.Item>
				<img src="images/ledger_logo.png" alt="" />
			</Menu.Item>
			<Menu.Item as={Link} name='home' active={props.activeItem === 'home'} to="/" onClick={() => props.handleItemClick('home')}></Menu.Item>
			<Menu.Item as={Link} name='get-started' active={props.activeItem === 'get-started'} to="/get-started" onClick={() => props.handleItemClick('get-started')}></Menu.Item>
			<Menu.Menu position='right'>
				<Menu.Item>
					<Icon name='user circle' />
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	</div>
)

export default NavBar

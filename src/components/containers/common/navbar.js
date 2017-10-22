// eslint-disable-next-line
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


import NavBar from '../../ui/common/navbar'
import { handleNavBarClick } from '../../../actions'


const mapStateToProps = (state, props) =>
	({
		router: state.router,
		activeItem: state.configState.navBarMenu.activeItem
	})


const mapDispatchToProps = dispatch =>
	({
		handleItemClick (name, props) {

			dispatch(
				handleNavBarClick(name)
			)
		}
	})

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(NavBar)

export default withRouter(Container)

// eslint-disable-next-line
import React from 'react'
import { connect } from 'react-redux'

import GetStarted from '../ui/getStarted'


const mapStateToProps = (state, props) =>
	({
		router: props.router,
		notifications: state.notifications,
		config: state.configState
	})

const mapDispatchToProps = (dispatch) => ({})

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(GetStarted)

export default Container

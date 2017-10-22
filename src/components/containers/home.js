// eslint-disable-next-line
import React from 'react'
import { connect } from 'react-redux'

import Home from '../ui/home'


const mapStateToProps = (state, props) => 
	({
		router: state.router
	})	

const mapDispatchToProps = dispatch => ({})

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)

export default Container



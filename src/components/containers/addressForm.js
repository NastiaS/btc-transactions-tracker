// eslint-disable-next-line
import React from 'react'
import { connect } from 'react-redux'

import AddressForm from '../ui/addressForm'
import { updateBitcoinAddress, getBitcoinBalance } from '../../actions'


const mapStateToProps = (state, props) => 
	({
		router: state.router,
		bitcoinAddressInfo: state.bitcoinAddressInfo
	})	

const mapDispatchToProps = dispatch =>
	({
		handleFormChange (e, {name, value}) {
			dispatch(
				updateBitcoinAddress({[name]: value})
			)
		},
		handleSubmitForm (bitcoinAddress) {
			dispatch(
				getBitcoinBalance(bitcoinAddress)
			)
		}
	})

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddressForm)

export default Container



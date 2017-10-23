// eslint-disable-next-line
import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import TransactionsTable from '../ui/transactionsTable'
import { toggleAddressForm, clearAddressForm, updateTableSortOrder, performTableSort } from '../../actions'

const mapStateToProps = (state, props) => 
	({
		router: state.router,
		bitcoinAddressInfo: state.bitcoinAddressInfo
	})	

const mapDispatchToProps = dispatch =>
	({
		toggleAddressForm () {
			dispatch(
				clearAddressForm()
			)
			dispatch(
				toggleAddressForm()
			)
		},
		handleSort (clickedColumn, bitcoinAddressInfo)  {
			if (bitcoinAddressInfo.column !== clickedColumn) {
				dispatch(
					updateTableSortOrder({
						column: clickedColumn,
						data: _.sortBy(bitcoinAddressInfo.transactions, [clickedColumn]),
						direction: 'ascending'
					})
				)
			}else{
				dispatch(
					performTableSort({
						data: bitcoinAddressInfo.transactions.reverse(),
						direction: bitcoinAddressInfo.direction === 'ascending' ? 'descending' : 'ascending',
					})
				)
			} 
			
		}
	})

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(TransactionsTable)

export default Container



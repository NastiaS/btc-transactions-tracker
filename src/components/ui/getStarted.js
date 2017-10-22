// eslint-disable-next-line
import React from 'react'

import NotificationBanner from '../containers/common/notificationBanner'
import AddressForm from '../containers/addressForm'
import TransactionsTable from '../containers/transactionsTable'


const GetStarted = props => (
	<div>
		{ props.notifications.length>0 ? <NotificationBanner /> : null }			      
		{ !props.config.toggleAddressForm ? <AddressForm /> : <TransactionsTable /> }
	</div>
)

export default GetStarted

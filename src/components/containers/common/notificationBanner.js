// eslint-disable-next-line
import React from 'react'
import NotificationBanner from '../../ui/common/notificationBanner'
import { connect } from 'react-redux'
import { clearNotificationBanner } from '../../../actions'



const mapStateToProps = (state, props) => {
	return ({
		notifications: state.notifications
	})
}

const mapDispatchToProps = dispatch =>
	({
		clearBanner(id) {
			dispatch(
				clearNotificationBanner(id)
			)
		}

	})

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(NotificationBanner)

export default Container

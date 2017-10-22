import React from 'react'
import { Message } from 'semantic-ui-react'

const NotificationBanner = props => (
	<div className="ldg-notification-banner-container">
		{props.notifications.map(function(notification, index) {
			return <div key={index}>
					<Message size="mini" onDismiss={() => props.clearBanner(notification._id)} color={(notification.type==="error") ? 'red' : ((notification.type==='warning') ? 'orange' : 'green')}>
						<Message.Header>{notification.message}
						</Message.Header>					
					</Message>
				</div>
		})}
	</div>
)

export default NotificationBanner
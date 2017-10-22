// eslint-disable-next-line
import React from 'react'
import { Form, Button, TextArea } from 'semantic-ui-react'


const AddressForm = props => (
	<div className="ldg-address-form-container">
		<h1 className="ldg-title">Ledger Test App</h1>
		<h2 className="ldg-sub-header">Enter a bitcoin address to compute balance</h2>
		<Form onSubmit={() => props.handleSubmitForm(props.bitcoinAddressInfo.address)}>
			<Form.Group>
				<TextArea placeholder='Bitcoin Address' name='address' value={props.bitcoinAddressInfo.address ? props.bitcoinAddressInfo.address : ''} onChange={props.handleFormChange} />
			</Form.Group>
				<Button basic color="teal" floated="right" content='Show me my balance'></Button>
		</Form>
	</div>
)

export default AddressForm

// eslint-disable-next-line
import React from 'react'
import moment from 'moment';

import { Button, Table, Icon, Grid } from 'semantic-ui-react'

const TransactionsTable = props => (
	<div>
		<div className="ldg-table-container">
			<Grid columns={2} verticalAlign='middle'>
				<Grid.Row className="ldg-title-div">
					<Grid.Column>
						<h1 className="ldg-header">BTC {props.bitcoinAddressInfo.balance.toFixed(4)}</h1>
						<h2 className="ldg-sub-header">Your balance</h2>
					</Grid.Column>
					<Grid.Column>
						<Button basic floated="right" onClick={props.toggleAddressForm}>Change My Address</Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>				
			<Table color="teal" celled fixed sortable>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell sorted={props.bitcoinAddressInfo.column === 'date' ? props.bitcoinAddressInfo.direction : null} onClick={()=>props.handleSort('date', props.bitcoinAddressInfo)} textAlign="left">Date</Table.HeaderCell>
						<Table.HeaderCell textAlign="left">Hash</Table.HeaderCell>
						<Table.HeaderCell sorted={props.bitcoinAddressInfo.column === 'value' ? props.bitcoinAddressInfo.direction : null} onClick={()=>props.handleSort('value', props.bitcoinAddressInfo)} textAlign="right">Amount</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body className="ldg-table-body">
					{props.bitcoinAddressInfo.transactions.map(function(dataPoint, index) {
						return <Table.Row key={index}>
							<Table.Cell textAlign="left">
								<p className="ldg-date-text">{moment(dataPoint.date).format('llll')}</p>					
							</Table.Cell>
							<Table.Cell textAlign="left">
								{dataPoint.hash}
							</Table.Cell>
							<Table.Cell textAlign="right">
								<div>
									<p className={(dataPoint.value>=0) ? 'ldg-positive_fluctuation' : 'ldg-negative-fluctuation'}>
									<Icon name={(dataPoint.value<0) ? 'caret up' : 'caret down'} color={(dataPoint.value>=0) ? 'green' : 'red'} /> BTC {dataPoint.value.toFixed(4)} 											
									</p>
								</div>
							</Table.Cell>
						</Table.Row>
					})}
				</Table.Body>
				<Table.Footer fullWidth>
					<Table.Row></Table.Row>
				</Table.Footer>
			</Table>
		</div>
	</div>
)

export default TransactionsTable

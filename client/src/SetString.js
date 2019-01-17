import React from "react";
import './App.css';
class SetString extends React.Component {
	state = { stackId: null };

	handleKeyDown = e => {
		if (e.keyCode === 13) {
			this.setValue(e.target.value);
		}
	};

	setValue = value => {
		const { drizzle, drizzleState } = this.props;
		const contract = drizzle.contracts.MyString;
		const stackId = contract.methods["set"].cacheSend(value, {
			from: drizzleState.accounts[0]
		});
		this.setState({ stackId });

	};

	getTxStatus = () => {
		const { transactions, transactionStack } = this.props.drizzleState;
		const txHash = transactionStack[this.state.stackId];
		if (!txHash) return null;

		return `Transaction status: ${transactions[txHash].status}`;

	};

	render () {
		return (
			<div >
			<input type="text" className="Input" onKeyDown={this.handleKeyDown} />
			<div>{this.getTxStatus()}</div>
			</div>
			);
	}
}
 export default SetString;

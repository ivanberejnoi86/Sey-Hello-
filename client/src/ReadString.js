import React from "react";

class ReadString extends React.Component {
	state = { dataKey: null };
	
	componentDidMount() {
		const { drizzle } = this.props;
		const contract = drizzle.contracts.MyString;
		const dataKey = contract.methods["myString"].cacheCall();
		this.setState({ dataKey});


	}

	render() {
		const { MyString } = this.props.drizzleState.contracts;
		const myString = MyString.myString[this.state.dataKey];
		return <p>Say Hello Rinkeby: {myString && myString.value}</p>;
	}
}

export default ReadString;
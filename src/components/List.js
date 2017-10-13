
import React from 'react';

class List extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		var numbers = this.props.numbers.map((number)=><li key={number}>{number}</li>)
		return (
			<div>
				<h1>List example</h1>
				<ul>{numbers}</ul>
			</div>
		)
	}
}

export default List;
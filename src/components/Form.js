
import React from 'react';
class Form extends React.Component{
	constructor(props){
		super(props)
	}
	render(){

		return (
			<div>
				<h1>Form example</h1>
				<form>
					<div><label>Name:</label><input type="text" name="name" /></div>
					<div><label>Passwords:</label><input type="text" name="pwd" /></div>
				</form>
			</div>
		)
	}
}

export default Form
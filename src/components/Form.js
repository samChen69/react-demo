
import React from 'react';
class Form extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name:'',
			pwd:''
		}
		this.handleClick = this.handleClick.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event){
		let tgt = event.target;
		let k = tgt.name;
		let v = tgt.value;
		this.setState({
			[k]:v
		})
	}
	handleClick(event){
		event.preventDefault();
		console.log(`name:${this.state.name},pwd:${this.state.pwd}`)
	}
	render(){

		return (
			<div>
				<h1>Form example</h1>
				<form>
					<div><label>Name:</label><input onChange={this.handleChange} value={this.state.name} type="text" name="name" /></div>
					<div><label>Passwords:</label><input onChange={this.handleChange} value={this.state.pwd} type="password" name="pwd" /></div>
					<div><button onClick={this.handleClick}>submit</button></div>
				</form>
			</div>
		)
	}
}

export default Form;
import React from 'react';

class Clock extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			date:new Date(),
			comments:'Good luck!'
		};
	}

	//当组件挂载是执行的方法
	componentDidMount() {
		this.timerID = setInterval(()=>this.tick(),1000)
	}

	//当组件被卸载的时候执行的方法
	componentWillUnmount() {
		clearInterval(this.timerID)
	}

	tick(){
		this.setState({date:new Date()})
	}
	
	render(){
		return (
			<div>
				<h1>Hello,{this.props.name}! {this.state.comments}!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		)
	}
} 

export default Clock;
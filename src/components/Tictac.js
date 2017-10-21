import React from 'react';
import style from './Tictac.css'

class Tictac extends React.Component{
	constructor(props){
		super(props);
	}

	Square(props) {
		return (
			<span onClick={()=>alert('click')}>{props.value}</span>
		)
	}

	render(){

		return (
			<div>
				<h1>this is Tictac Game</h1>
				<div className='board'>
					<div className='board-row'><Square /><Square /><Square /></div>
					<div className='board-row'><Square /><Square /><Square /></div>
					<div className='board-row'><Square /><Square /><Square /></div>
				</div>
			</div>
		)
	}
}

export default Tictac;
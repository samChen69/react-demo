import React from 'react';

import './Tictac.css'

class Square extends React.Component{
	constructor(){
		super();
		this.state = {
			value:null
		}
	}
	render(){
		return (
			<button className="Square" onClick={()=>this.setState({value:'X'})}>
				{this.state.value}
			</button>
		)
	}
}

class Board extends React.Component{
	constructor(){
		super();
		this.state = {
			square:Array(9).fill(null),
			xIsNext:true
		}
	}
	renderSquare(i){
		return <Square value={this.state.square[i]} onClick={()=>this.handleClick(i)} />
	}
	handleClick(i){
		const square = this.state.square.slice();
		square[i] = this.state.xIsNext?'X':'O';
		this.setState({square:square,xIsNext:!this.state.xIsNext});
	}

	render(){
		const status = 'Next player:X';

		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>

		)
	}
}

class Game extends React.Component{
	render(){
		return (
			<div className="game">
				<div className="game-border">
					<Board />
				</div>
				<div className="game-info">
					<div>status</div>
					<ol>TODO</ol>
				</div>
			</div>
		)
	}
}

export default Game;
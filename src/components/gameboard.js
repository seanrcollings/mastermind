import React, { Component } from 'react';
import GameInput from './gameInput';

class GameBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedValue1: 'red',
      selectedValue2: 'red',
      selectedValue3: 'red',
      selectedValue4: 'red',
    }
  }

  renderGameBoard = () => {
    let gameBoard = []
    for (var i = 0; i < this.props.turn; i++) {
      gameBoard.push(
        <div key = {Math.floor(Math.random() * 10000000)}> 
          <GameInput value={this.state.selectedValue1} onChange={(val) => this.setState({selectedValue1: val})}/>
          <GameInput value={this.state.selectedValue2} onChange={(val) => this.setState({selectedValue2: val})}/>
          <GameInput value={this.state.selectedValue3} onChange={(val) => this.setState({selectedValue3: val})}/>
          <GameInput value={this.state.selectedValue4} onChange={(val) => this.setState({selectedValue4: val})}/>
        </div>
      )
    }
    return gameBoard
  }

  handleClick = () => {
    console.log(this.state)
    this.props.callback(this.state)
  }

  render() {
    return (
      <div>
        {this.renderGameBoard()}
        <button onClick = {this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default GameBoard;


import React, { Component } from 'react';
import GameBoard from './gameboard';
import Pegboard from './pegboard';

class Game extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      turn: 1
    }
  }

  nextTurn = (blackPegs, whitePegs) => {
    this.setState({blackPegs, whitePegs, turn: this.state.turn + 1}, () => {console.log(this.state)})
  }
  
  render() {
    return (
      <div className="game">
        <div className="game__colorboard">
          <GameBoard 
            turn = {this.state.turn} 
            callback = {this.nextTurn}
          />
        </div>
        <div className="game__pegboard">
          <Pegboard 
            turn = {this.state.turn}
            blackPegs = {this.state.blackPegs}
            whitePegs = {this.state.whitePegs}
          />
          </div>
      </div>
    );
  }
}

export default Game;
import React, { Component } from 'react';
import GameBoard from './gameboard';
import Pegboard from './pegboard';

class Game extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      turn : 1,
      blackPegs : 0,
      whitePegs : 0,
      guess: {
        selectedValue1: 'red',
        selectedValue2: 'red',
        selectedValue3: 'red',
        selectedValue4: 'red',
      },
      answer : {
        answerValue1: 'red',
        answerValue2: 'blue', 
        answerValue3: 'green', 
        answerValue4: 'red'
      },
    }
  }

  nextTurn = (blackPegs, whitePegs) => {
    this.setState({blackPegs, whitePegs, turn: this.state.turn + 1})
  }
 
  genAnswer = () => {
    let colorList = ['red', 'green', 'orange', 'purple', 'blue', 'yellow'] 
    let answers = {answerValue1: null, answerValue2: null, answerValue3: null, answerValue4: null}
    for (var key in answers) {
      answers[key] = colorList[Math.floor(Math.random() * 6)];
    }
    return answers;
  }
  
  checkAnswer = (playerGuess) => {
    const answer =  Object.values(this.state.answer);
    const guess = Object.values(playerGuess);
    var blackPegs = 0;
    var whitePegs = 0;
    for (var index = 0; index < guess.length; index++) {
      if (answer[index] === guess[index]) {
        blackPegs++;
      } 
      else if (answer.indexOf(guess[index]) >= 0 && answer[index] !== guess[index]) {
          whitePegs++;
      }
    }
    this.setState({blackPegs, whitePegs}, 
      () => {
        if (this.state.blackPegs >= 4) {
          alert('You won!')
        } else {
          this.nextTurn(this.state.blackPegs, this.state.whitePegs)
        }
      }
    )
  }
  
  render() {
    console.log(this.state)
    return (
      <div className="game">
        <div className="game__colorboard">
          <GameBoard 
            turn = {this.state.turn} 
            callback = {this.checkAnswer}
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
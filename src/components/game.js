import React, { Component } from 'react';
import GameBoard from './gameboard';
import Pegboard from './pegboard';

class Game extends Component {
  defaultGameBoard = {
    selectedValue1: 'red',
    selectedValue2: 'red',
    selectedValue3: 'red',
    selectedValue4: 'red',
  }

  constructor(props) {
    super(props);
    
    this.state = {
      answer : {
        answerValue1: 'red',
        answerValue2: 'blue', 
        answerValue3: 'green', 
        answerValue4: 'red'
      },
      gameBoards: [this.defaultGameBoard],
      results: []
    }
  }

  nextTurn = () => {
    this.setState({gameBoards: [...this.state.gameBoards, this.defaultGameBoard]})
  }
 
  genAnswer = () => {
    let colorList = ['red', 'green', 'orange', 'purple', 'blue', 'yellow'] 
    let answers = {answerValue1: null, answerValue2: null, answerValue3: null, answerValue4: null}
    for (var key in answers) {
      answers[key] = colorList[Math.floor(Math.random() * 6)];
    }
    return answers;
  }
  
  checkAnswer = () => {
    const answer =  Object.values(this.state.answer);
    const guess = Object.values(this.state.gameBoards[this.state.gameBoards.length-1]);
    let blackPegs = 0;
    let whitePegs = 0;
    for (let index = 0; index < guess.length; index++) {
      if (answer[index] === guess[index]) {
        blackPegs++;
      }
      // Fix logic for calculation number of white pegs 
      else if (answer.indexOf(guess[index]) >= 0) {
          whitePegs++;
      }
    }
    this.setState({results: [...this.state.results, {blackPegs, whitePegs}]}, 
      () => {
        if (blackPegs >= 4) {
          alert('You won!')
        } else {
          this.nextTurn()
        }
      }
    )
  }

  updateValue = (key, value) => {
    let newActiveBoard = { ...this.state.gameBoards[this.state.gameBoards.length-1] };
    newActiveBoard[key] = value;
    let newBoards = [...this.state.gameBoards];
    newBoards[newBoards.length-1] = newActiveBoard;
    this.setState({gameBoards: newBoards});    
  }
  
  /* RENDERERS */

  renderGameBoards = () => {
    return this.state.gameBoards.map((boardAnswer, i) => {
      return (
        <GameBoard
          key={i} 
          selectedValues={boardAnswer} 
          active={i === this.state.gameBoards.length - 1} 
          updateValue={this.updateValue}
        />
      )
    })  
  } 

  render() {
    console.log(this.state)
    return (
      <div className="game">
        <div className="game__colorboard">
          {this.renderGameBoards()}
          <button onClick = {this.checkAnswer}>Submit</button>
        </div>

        <div className="game__pegboard">
          <Pegboard 
            results={this.state.results}
          />
          </div>
      </div>
    );
  }
}

export default Game;
import React, { Component } from 'react';
import GameBoard from './gameboard';
import Pegboard from './pegboard';
import Sidebar from './sidebar';

class Game extends Component {
  defaultGameBoard = {
    selectedValue1: 'white',
    selectedValue2: 'white',
    selectedValue3: 'white',
    selectedValue4: 'white',
  }

  defaultFocus = {
    x: null, 
    y: null, 
    color: null
  }

  constructor(props) {
    super(props);
    
    this.state = {
      answer : {
        answerValue1: 'blue',
        answerValue2: 'orange', 
        answerValue3: 'blue', 
        answerValue4: 'yellow'
      },
      gameBoards: [this.defaultGameBoard],
      results: [],
      focused: this.defaultFocus
    }
  }
  
  /* HELPERS */

  nextTurn = () => {
    this.setState({gameBoards: [...this.state.gameBoards, this.defaultGameBoard]})
  }

  updateValue = (key, value) => {
    let newActiveBoard = { ...this.state.gameBoards[this.state.gameBoards.length-1] };
    newActiveBoard[key] = value;
    let newBoards = [...this.state.gameBoards];
    newBoards[newBoards.length-1] = newActiveBoard;
    this.setState({gameBoards: newBoards, focused: this.defaultFocus},() => {console.log(this.state)});
  }

  genAnswer = () => {
    let colorList = ['red', 'green', 'orange', 'purple', 'blue', 'yellow'] 
    let answers = {answerValue1: null, answerValue2: null, answerValue3: null, answerValue4: null}
    for (var key in answers) {
      answers[key] = colorList[Math.floor(Math.random() * 6)];
    }
    console.log(answers)
    return answers;
  }
  
  checkAnswer = () => {
    const answer =  Object.values(this.state.answer);
    const guess = Object.values(this.state.gameBoards[this.state.gameBoards.length-1]);
    let pegs = [null, null, null, null]
    let blackPegs = 0;
    let whitePegs = 0;
    
    // Adds blackPegs
    for (let index = 0; index < guess.length; index++) {
      if (answer[index] === guess[index]) {
        pegs[index] = 'black';
        blackPegs++;
      }
    }
    // Adds whitePegs
    for (let guessindex = 0; guessindex < guess.length; guessindex++) {
      for (let answerindex = 0; answerindex < 4; answerindex++) {
        if (answer[answerindex] === guess[guessindex] && pegs[answerindex] === null) {
          whitePegs++;
          pegs[answerindex] = 'white'
          break;
        }
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

  /* RENDERERS */

  renderGameBoards = () => {
    return this.state.gameBoards.map((boardAnswer, i) => {
      return (
        <GameBoard
          key={i} 
          selectedValues={boardAnswer} 
          active={i === this.state.gameBoards.length - 1} 
          updateValue={this.updateValue}
          focused={this.state.focused}
        />
      )
    })  
  } 

  handleFocus = (x, y, color) => {
    console.log(x, y)
    this.setState({focused: {x, y, color}})
  }

  render() {
    return (
      <div className="game">

        <div className='game__sidebar'>
          <Sidebar callback = {this.handleFocus}/>
        </div>

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
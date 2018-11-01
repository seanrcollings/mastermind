import React, { Component } from 'react';
import GameInput from './gameInput';

class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      blackPegs: 0,
      whitePegs: 0, 
      guess: {
        selectedValue1: 'red',
        selectedValue2: 'red',
        selectedValue3: 'red',
        selectedValue4: 'red',
      },
      answer : this.genAnswer(),
    }
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
    const guess = Object.values(this.state.guess);
    console.log(answer)
    console.log(guess)
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
          this.newTurn();
        }
      }
    )
  }

  newTurn = () => {
    this.callback(this.state.blackPegs, this.state.whitePegs);
  }


      
  render() {
    return (
      <div>
        <GameInput value={this.state.selectectedValue1} onChange={(val) => this.setState({guess: {...this.state.guess, selectedValue1: val}})}/>
        <GameInput value={this.state.selectectedValue2} onChange={(val) => this.setState({guess: {...this.state.guess, selectedValue2: val}})}/>
        <GameInput value={this.state.selectectedValue3} onChange={(val) => this.setState({guess: {...this.state.guess, selectedValue3: val}})}/>
        <GameInput value={this.state.selectectedValue4} onChange={(val) => this.setState({guess: {...this.state.guess, selectedValue4: val}})}/>
        <button onClick = {this.checkAnswer}>Submit</button>
      </div>
    );
  }
}

export default Game


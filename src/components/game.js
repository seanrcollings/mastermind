import React, { Component } from 'react';
import GameInput from './gameInput';

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedValue1: 'red',
      selectedValue2: 'red',
      selectedValue3: 'red',
      selectedValue4: 'red',
    }
  }

  checkAnswer = () => {
    
  }

  render() {
    return (
      <div>
        <GameInput value={this.state.selectectedValue1} onChange={(val) => this.setState({selectedValue1: val})}/>
        <GameInput value={this.state.selectectedValue2} onChange={(val) => this.setState({selectedValue2: val})}/>
        <GameInput value={this.state.selectectedValue3} onChange={(val) => this.setState({selectedValue3: val})}/>
        <GameInput value={this.state.selectectedValue4} onChange={(val) => this.setState({selectedValue4: val})}/>
        <button onClick = {this.checkAnswer}>Submit</button>
      </div>
    );
  }
}

export default Game;
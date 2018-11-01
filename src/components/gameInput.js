import React, { Component } from 'react';

class GameInput extends Component {

  render() {
    return (
      <div>
        <select value = {this.props.value} onChange={(e) => this.props.onChange(e.currentTarget.value)}>
          <option value = 'red'>Red</option>
          <option value = 'green'>Green</option>
          <option value = 'yellow'>Yellow</option>
          <option value = 'blue'>Blue</option>
          <option value = 'purple'>Purple</option>
          <option value = 'orange'>Orange</option>
        </select> 
      </div>
    );
  }
}

export default GameInput;
import React, { Component } from 'react';

class Peg extends Component {
  
  render() {
    return (
        <div 
          className = 
            {`pegrow__peg 
            ${this.props.pegs === 'whitepegs' ? 'pegrow__peg-white' : 'pegrow__peg-empty' } 
            ${this.props.pegs === 'blackpegs' ? 'pegrow__peg-black' : ''}`}
        ></div>
    );
  }
}

export default Peg;
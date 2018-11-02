import React, { Component } from 'react';

class Peg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pegColor: this.pegColor()
    }
  }
    

  pegColor = () => {
    if (this.props.peg === 'whitepeg') {
      return 'white'
    } else if (this.props.peg === 'blackpeg') {
      return 'black'
    } else {
      return 'empty'
    }
  }

  render() {
    return (
        <div className = {`pegrow__peg ${'pegrow__peg-' + this.state.pegColor}`}></div>
    );
  }
}

export default Peg;
import React, { Component } from 'react';
import Peg from './peg';

class Pegboard extends Component {

  renderBlackPegs = () => {
    let blackPegs = [];
    for (let i = 0; i < this.props.turn; i++){
      for (let i = 0; i < this.props.blackPegs; i++) {
        blackPegs.push(<Peg peg = {'blackpeg'}/>)
      }
    }
    while (blackPegs.length % 4 !== 0) {
      blackPegs.push(<Peg peg = {'empty'}/>)
    } 
    return blackPegs
  }

  renderWhitePegs = () => {
    let whitePegs = [];
    for (let i = 0; i < this.props.turn; i++){
      for (let i = 0; i < this.props.whitePegs; i++) {
        whitePegs.push(<Peg peg = {'whitepeg'}/>)
      }
    }
    while (whitePegs.length % 4 !== 0 && whitePegs.length !== 0) {
      whitePegs.push(<Peg peg = {'empty'}/>)
    }
    console.log(whitePegs)
    return whitePegs
  }
  
  render() {
    return (
      <div className = 'pegboard'>
        <div className = 'pegboard__white'>
          <h4 className ='pegboard__title' >WHITE PEGS</h4>
          <div className = 'pegboard__white-pegs'>
            <div className = 'pegrow'>
              {this.renderWhitePegs()}
            </div>
          </div>
        </div>
        
        <div className = 'pegboard__black'>
          <h4 className ='pegboard__title'>BLACK PEGS</h4>
          <div className = 'pegboard__black-pegs'>
            <div className = 'pegrow'>
              {this.renderBlackPegs()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pegboard;
import React, { Component } from 'react';
import Peg from './peg';

class Pegboard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      blackPegs: 0,
      whitePegs: 0
    }
  }

  renderPegBoard = (pegs) => {
    let pegNumber = pegs === 'whitepegs' ? this.props.whitePegs : this.props.blackPegs
    let pegBoard = []
    for (var i = 0; i < this.props.turn; i++) {

    }
    // let pegBoard = []
    // if (pegs === 'whitepegs'){
    //   let whitePegs = this.props.whitePegs;
    //   for (var i = 0; i < this.props.turn; i++) {
    //     pegBoard.push(
    //       <Peg peg = {'whitepegs'}/> 
    //     )
    //   }
    //   return pegBoard
    // } 
    // else {
    //   let blackpegs = this.props.blackpegs;
    //   for (var i = 0; i < this.props.turn; i++) {
    //     if (blackpegs > 0) {
    //       pegBoard.push(
    //        <Peg peg = {'blackpegs'}/> 
    //       )
    //     } else {
    //       pegBoard.push(
    //         <Peg/> 
    //       )
    //     }
    //   }
    //   return pegBoard
    // }
  }
  
  render() {
    return (
      <div className = 'pegboard'>
        <div className = 'pegboard__white'>
          <h4 className ='pegboard__title' >WHITE PEGS</h4>
          <div className = 'pegboard__white-pegs'>
            <div className = 'pegrow'>
              {this.renderPegBoard('whitepegs')}
            </div>
          </div>
        </div>
        
        <div className = 'pegboard__black'>
          <h4 className ='pegboard__title'>BLACK PEGS</h4>
          <div className = 'pegboard__black-pegs'>
            <div className = 'pegrow'>
              {this.renderPegBoard('blackpegs')}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pegboard;
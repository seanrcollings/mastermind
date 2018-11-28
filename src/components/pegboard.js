import React, { Component } from 'react';
import Peg from './peg';

class Pegboard extends Component {

  /* RENDERERS */
  
  renderBlackPegs = () => {
    return this.modifiedResults().map(result => {
      let blackPegs = [];
      this.addPegs(blackPegs, result.blackPegs, 'blackpeg')
      this.addPegs(blackPegs, 4 - result.blackPegs, 'empty')
      return blackPegs;
    })
  }

  renderWhitePegs = () => {
    return this.modifiedResults().map(result => {
      let whitePegs = [];
      this.addPegs(whitePegs, result.whitePegs, 'whitepeg')
      this.addPegs(whitePegs, 4 - result.whitePegs, 'empty')
      return whitePegs;
    })
  }

  /* HELPERS */

  addPegs = (pegsArray, numPegs, color) => {
    for (let i = 0; i < numPegs; i++) {
      pegsArray.push(<Peg key = {`${i}${color}`} peg={color}/>)
    }
  }

  modifiedResults = () => {
    return [...this.props.results, {whitePegs: 0, blackPegs: 0}]
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
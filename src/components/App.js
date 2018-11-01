import React, { Component } from 'react';
import Sidebar from './sidebar';
import Game from './game';
import Pegboard from './pegboard';

class App extends Component {

  getPegs = (blackPegs, whitePegs) => {
    console.log('get pegs')
    return [blackPegs, whitePegs]
  } 

  render() {
    return (
      <div className="game">
        <div className="game__sidebar"><Sidebar/></div>
        <div className="game__game"><Game callback = {this.getPegs}/></div>
        <div className="game__pegboard"><Pegboard props = {this.getPegs()}/></div>
      </div>
    );
  }
}

export default App;

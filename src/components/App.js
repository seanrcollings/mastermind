import React, { Component } from 'react';
import Sidebar from './sidebar';
import Pegboard from './pegboard';
import Game from './game';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__sidebar"><Sidebar/></div>
        <div className="app__game"><Game/></div>
        <div className="app__pegboard"><Pegboard/></div>
      </div>
    );
  }
}

export default App;

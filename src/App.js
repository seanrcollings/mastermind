import React, { Component } from 'react';
import './App.scss';
import Draggable from 'react-draggable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Draggable >
            <div className='drag'>This a draggable div now!</div>
          </Draggable>
        </header>
      </div>
    );
  }
}

export default App;

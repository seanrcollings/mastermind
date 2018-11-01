import React, { Component } from 'react';
import Pegrow from './pegrow';

class Pegboard extends Component {
  render() {
    console.log(this.props)
    return (
      <div className = 'pegboard'>
        <div className = 'pegboard__white'>
          <h4 className ='pegboard__title' >WHITE PEGS</h4>
          <div className = 'pegboard__white-pegs'>
            <Pegrow/>
            <Pegrow/>
            <Pegrow/>
            <Pegrow/>
            <Pegrow/>
            <Pegrow/>
          </div>
        </div>
        
        <div className = 'pegboard__black'>
          <h4 className ='pegboard__title'>BLACK PEGS</h4>
          <div className = 'pegboard__black-pegs'>
            <Pegrow/>
            <Pegrow/>
            <Pegrow/>
            <Pegrow/>
            <Pegrow/>
            <Pegrow/>
          </div>
        </div>
      </div>
    );
  }
}

export default Pegboard;
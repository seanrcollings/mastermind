import React, { Component } from 'react';
import GameInput from './gameInput';
import EmptyBox from './emptyBox';

class GameBoard extends Component {

  render() {
    return (
      <div> 
          <EmptyBox focused={this.props.focused} className='game__input'/>
          <EmptyBox focused={this.props.focused} className='game__input'/>
          <EmptyBox focused={this.props.focused} className='game__input'/>
          <EmptyBox focused={this.props.focused} className='game__input'/>
      </div>
    );
  }
}

export default GameBoard;


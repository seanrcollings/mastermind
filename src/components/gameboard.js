import React, { Component } from 'react';
import GameInput from './gameInput';
import EmptyBox from './emptyBox';

class GameBoard extends Component {

  render() {
    return (
      <div> 
        {/* <GameInput 
          disabled={!this.props.active} 
          value={this.props.selectedValues.selectedValue1} 
          onChange={(val) => this.props.updateValue('selectedValue1', val)}
          />
        <GameInput 
          disabled={!this.props.active} 
          value={this.props.selectedValues.selectedValue2} 
          onChange={(val) => this.props.updateValue('selectedValue2', val)}
          />
        <GameInput 
          disabled={!this.props.active} 
          value={this.props.selectedValues.selectedValue3} 
          onChange={(val) => this.props.updateValue('selectedValue3', val)}
          />
        <GameInput 
          disabled={!this.props.active} 
          value={this.props.selectedValues.selectedValue4} 
          onChange={(val) => this.props.updateValue('selectedValue4', val)}
          /> */}
          <EmptyBox className='game__input'/>
          <EmptyBox className='game__input'/>
          <EmptyBox className='game__input'/>
          <EmptyBox className='game__input'/>
      </div>
    );
  }
}

export default GameBoard;


import React, { Component } from 'react';
import EmptyBox from './emptyBox';

class GameBoard extends Component {

  render() {
    return (
      <div> 
          <EmptyBox 
            name={'selectedValue1'} 
            color={this.props.selectedValues['selectedValue1']} 
            updateValue={this.props.updateValue}  
            className='game__input'
            focused={this.props.focused}
            />
          <EmptyBox 
            name={'selectedValue2'} 
            color={this.props.selectedValues['selectedValue2']} 
            updateValue={this.props.updateValue}  
            className='game__input'
            focused={this.props.focused}
            />
          <EmptyBox 
            name={'selectedValue3'} 
            color={this.props.selectedValues['selectedValue3']} 
            updateValue={this.props.updateValue}  
            className='game__input'
            focused={this.props.focused}
            />
          <EmptyBox 
            name={'selectedValue4'} 
            color={this.props.selectedValues['selectedValue4']} 
            updateValue={this.props.updateValue}  
            className='game__input'
            focused={this.props.focused}
            />
      </div>
    );
  }
}

export default GameBoard;


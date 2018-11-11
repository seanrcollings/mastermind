import React, { Component } from 'react';
import ColorBox from './colorBox';

class GameBoard extends Component {

  renderColorBoxes = () => {
    return Object.keys(this.props.selectedValues).map(key => {
      return (
        <ColorBox 
          name={key}
          key={key} 
          color={this.props.selectedValues[key]} 
          updateValue={this.props.updateValue}  
          activeDraggable={this.props.activeDraggable}
          width='150px'
        />
      )
    })
  }
  render() {
    return (
      <div className = 'gameboard-colorbox-wrapper'> 
        {this.renderColorBoxes()}
      </div>
    );
  }
}

export default GameBoard;


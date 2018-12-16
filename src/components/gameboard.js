import React, { Component } from 'react';
import ColorBox from './colorBox';

class GameBoard extends Component {

  renderColorBoxes = () => {
    return Object.keys(this.props.selectedValues).map(key => {
      return (
        <div className="gameboard-colorbox-background">
          <ColorBox
            name={key}
            key={key}
            color={this.props.selectedValues[key]}
            updateValue={this.props.updateValue}
            activeDraggable={this.props.activeDraggable}
            width='150px'
            onDrop={this.props.onDrop}
          />
        </div>
      )
    })
  }
  render() {
    return (
      <div className = 'gameboard-colorbox__wrapper'> 
        {this.renderColorBoxes()}
      </div>
    );
  }
}

export default GameBoard;


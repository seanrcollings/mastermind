import React, { Component } from 'react';
import Draggable from 'react-draggable'
class ColorBox extends Component {
  render() {
    console.log(this.props.color)
    return (
      <Draggable>
        <div className={`colorbox__${this.props.name}`} style={{backgroundColor: `${this.props.color}`}}>
        </div>
      </Draggable>
    );
  }
}

export default ColorBox;
import React, { Component } from 'react';
import Draggable from 'react-draggable'
class ColorBox extends Component {
  render() {
    return (
      <Draggable>
        <div className={`colorbox__${this.props.name}`} key = {this.props.color} style={{backgroundColor: `${this.props.color}`}}>
        </div>
      </Draggable>
    );
  }
}

export default ColorBox;
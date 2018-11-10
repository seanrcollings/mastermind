import React, { Component } from 'react';
import Draggable from 'react-draggable'

class ColorBox extends Component {
  constructor(props) {
    super(props)
    this.colorBox = React.createRef()
    this.state = {
      position: {
        x: 0, y: 0
      },
    } 
  }

  onStop = (event, data) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(this.colorBox)
    console.log(this.colorBox.current.getBoundingClientRect())
    this.setState({position: {x: data.x, y:data.y}})
  };
  
  render() {
    return (
      <Draggable  position={this.state.position} onStop={this.onStop}>
        <div ref={this.colorBox} className={`colorbox__${this.props.name}`} key = {this.props.color} style={{backgroundColor: `${this.props.color}`}}>
        </div>
      </Draggable>
    );
  }
}

export default ColorBox;
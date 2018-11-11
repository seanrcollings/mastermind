import React, { Component } from 'react';
import Draggable from 'react-draggable'

class ColorBox extends Component {
  constructor(props) {
    super(props)
    this.colorBox = React.createRef() 
    this.state = {
      beingDragged: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sidebar) {
      return 
    }
    const {x, y} = this.colorBox.current.getBoundingClientRect()
    if (Math.abs(nextProps.activeDraggable.x - x) < 200 || Math.abs(x - nextProps.activeDraggable.x) < 200 ) {
      if (Math.abs(nextProps.activeDraggable.y - y) < 200 || Math.abs(y - nextProps.activeDraggable.y) < 200 ) {
        nextProps.updateValue(nextProps.name, nextProps.activeDraggable.color)
      }
    }
  }

  onStart = () => {
    this.setState({beingDragged: true})
  }

  onStop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const focusedBox = this.colorBox.current.getBoundingClientRect()
    this.setState({beingDragged: false})
    this.props.callback(focusedBox.x, focusedBox.y, this.props.color)
  };
  
  render() {
    let boxStyles = {
      backgroundColor: this.props.color,
      width: this.props.width,
      height: this.props.width,
      zIndex: this.state.beingDragged ? 100 : 0,
      position: 'relative'
    }
    return (
      <Draggable disabled = {!this.props.sidebar} position={{x: 0, y: 0}} onStart={this.onStart} onStop={this.onStop}>
        <div 
          ref={this.colorBox} 
          className={'colorbox'} 
          style={boxStyles}>
        </div>
      </Draggable>
    );
  }
}

export default ColorBox;
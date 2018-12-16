import React, { Component } from 'react';
import Draggable from 'react-draggable'

class ColorBox extends Component {
  dropMargin = 150;

  constructor(props) {
    super(props)
    this.colorBox = React.createRef()
    this.state = {
      beingDragged: false
    }
  }

  componentWillReceiveProps(nextProps) {
    // Checks to see whether or not the draggable box is within the dropMargin of any specific box
    if (nextProps.sidebar) {
      return
    }
    const { x, y } = this.colorBox.current.getBoundingClientRect()
    const withinX = Math.abs(nextProps.activeDraggable.x - x) < this.dropMargin || Math.abs(x - nextProps.activeDraggable.x) < this.dropMargin;
    const withinY = Math.abs(nextProps.activeDraggable.y - y) < this.dropMargin || Math.abs(y - nextProps.activeDraggable.y) < this.dropMargin;
    if (withinX && withinY && nextProps.activeDraggable.name !== nextProps.name) {
      nextProps.updateValue(nextProps.name, nextProps.activeDraggable.color)
    }
  }

  onStart = () => {
    if (this.props.answer) {
      return false
    } else {
      this.setState({beingDragged: true})
    }
  }

  onStop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const focusedBox = this.colorBox.current.getBoundingClientRect()
    this.setState({beingDragged: false})
    if(this.props.sidebar) {
      this.props.onDrop(focusedBox.x, focusedBox.y, this.props.color)
    } else {
      this.props.onDrop(focusedBox.x, focusedBox.y, this.props.color, this.props.name)
    }
  };

  render() {
    let boxStyles = {
      backgroundColor: this.props.color,
      width: this.props.width,
      height: this.props.width,
      zIndex: this.state.beingDragged ? 100 : 0,
      position: 'relative',
      borderRadius: '10px',
      marginBottom: this.props.sidebar ? '10px': ''
    }
    return (
      <Draggable position={{x: 0, y: 0}} onStart={this.onStart} onStop={this.onStop}>
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
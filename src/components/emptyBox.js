import React, { Component } from 'react';

class EmptyBox extends Component {
  
  constructor(props) {
    super(props);
    this.emptyBox = React.createRef();
  }

  updateValue = () => {
    const {x, y} = this.emptyBox.current.getBoundingClientRect()
    console.log(x, y)
    if (this.props.focused.x - x < 200 || x - this.props.focused.x < 200 ) {
      if (this.props.focused.y - y < 200 || y - this.props.focused.y < 200 ) {
        this.props.updateValue(this.props.name, this.props.focused.color)
      }
    }
  }

  render() {
    let boxStyles = {
      backgroundColor: this.props.color
    } 
    return (
      <div 
        ref = {this.emptyBox} 
        className="emptybox" 
        style={boxStyles}
        onMouseOver={this.updateValue}>
      </div>
    );
  }
}

export default EmptyBox;
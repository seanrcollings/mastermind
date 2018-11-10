import React, { Component } from 'react';

class EmptyBox extends Component {
  
  constructor(props) {
    super(props);
    this.emptyBox = React.createRef();
    this.state = {
      color: 'white'
    }
  }

  changeColor = () => {
    const {x, y} = this.emptyBox.current.getBoundingClientRect()
    console.log(x, y)
    if (this.props.focused.x - x < 200 || x - this.props.focused.x < 200 ) {
      if (this.props.focused.y - y < 200 || y - this.props.focused.y < 200 ) {
        this.setState({color: this.props.focused.color})
      }
    }
  }

  componentWillReceiveProps() {
    this.changeColor()
  }

  render() {
    let boxStyles = {
      backgroundColor: this.state.color
    }
    return (
      <div ref = {this.emptyBox} className="emptybox" style={boxStyles}></div>
    );
  }
}

export default EmptyBox;
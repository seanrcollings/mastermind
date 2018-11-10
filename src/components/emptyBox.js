import React, { Component } from 'react';

class EmptyBox extends Component {
  
  constructor(props) {
    super(props);
    this.emptyBox = React.createRef();
  }
  
  onDrop = (ev, category) => {
    let box = ev.dataTransfer.getData('text');
    console.log(box)
  }

  render() {
    return (
      <div ref = {this.emptyBox} className="emptybox"
        onMouseOver={(e) => {console.log(this.emptyBox.current.getBoundingClientRect())}}
        >
      </div>
    );
  }
}

export default EmptyBox;
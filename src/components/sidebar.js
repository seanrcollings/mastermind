import React, { Component } from 'react';
import ColorBox from './colorBox';
import EmptyBox from './emptyBox';


class Sidebar extends Component {

  createBoxes = () => {
    const colorOptions = [
        {
          name: 'blue',
          color: '#0000FF'
        },
        {
          name: 'red',
          color: '#ff0000'
        },
        {
          name: 'green',
          color: 'green'
        },
        {
          name: 'orange',
          color: 'orange'
        },
        {
          name: 'pink',
          color: 'pink'
        },
        {
          name: 'purple',
          color: 'purple'
        },
    ]

    return colorOptions.map(box =>  {
      return <ColorBox  
          key={box.name} 
          name={box.name} 
          id={box.name}
          color={box.color}
          callback={this.props.callback}
        />
    })
  }

  render() {
    return (
        <div className='colorbox-wrapper'>
          {this.createBoxes()}
        </div>
    );
  }
}

export default Sidebar;
import React, { Component } from 'react';
import ColorBox from './colorBox';


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
      return <ColorBox name={box.name} color={box.color}/>
    })
  }


  render() {
    return (
      <div className='sidebar-wrapper'>
        <div className='colorbox-wrapper'>
          {this.createBoxes()}
        </div>
      </div>
    );
  }
}

export default Sidebar;
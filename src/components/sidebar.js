import React, { Component } from 'react';
import ColorBox from './colorBox';


class Sidebar extends Component {

  createBoxes = () => {
    const colorOptions = [
        {
          name: 'blue',
          color: 'blue'
        },
        {
          name: 'red',
          color: 'red'
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
        {
          name: 'yellow',
          color: 'yellow'
        }
    ]

    return colorOptions.map(box =>  {
      return <ColorBox
          key={box.name}
          name={box.name}
          id={box.name}
          color={box.color}
          width={'100px'}
          onDrop={this.props.onDrop}
          sidebar={true}
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
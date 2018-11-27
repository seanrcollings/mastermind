import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header__title'>MASTER MIND</div>
        <a href = '/' className ='header__subtitle'>{'< BACK TO MAIN PAGE'}</a>
        <a href = 'https://en.wikipedia.org/wiki/Mastermind_(board_game)#Gameplay_and_rules' className ='header__subtitle'>MASTER MIND'S RULES</a>
      </div>
    );
    }
}

export default Header;
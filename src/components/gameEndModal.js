import React, { Component } from 'react';
import ColorBox from './colorBox';

class GameEndModal extends Component {
  
  renderAnswer = () => {
    return( // Change this to use a single map function like in gameboard.js
      <div className='results'>
        <div className='results__title'>Answer:</div>
        <div className = 'results__colorbox-wrapper'>
          <div className = 'results__colorbox-wrapper-colorbox'>  
            <ColorBox
              color={this.props.answer.answerValue1}
              width='30px'
              activeDraggable={{x:-10000, y:-1000, color:null}}
              answer={true}
            />
          </div>
          <div className = 'results__colorbox-wrapper-colorbox'> 
            <ColorBox
              color={this.props.answer.answerValue2}
              width='30px'
              activeDraggable={{x:-10000, y:-1000, color:null}}
              answer={true}
            />
          </div>
          <div className = 'results__colorbox-wrapper-colorbox'> 
            <ColorBox
              color={this.props.answer.answerValue3}
              width='30px'
              activeDraggable={{x:-10000, y:-1000, color:null}}
              answer={true}
            />
          </div>
          <div className = 'results__colorbox-wrapper-colorbox'> 
            <ColorBox
              color={this.props.answer.answerValue4}
              width='30px'
              activeDraggable={{x:-10000, y:-1000, color:null}}
              answer={true}
            />
          </div>
        </div>
      </div>
    )
  }

  render() {
    let showHide = this.props.show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={showHide}>
        <div className = 'modal__main'>
          <h2 className = 'modal__main-title'>{this.props.win ? 'YOU WON!' : 'YOU LOST!'}</h2>
          <div className = 'modal__main-results'>
            {this.renderAnswer()}
          </div>
          <div className = 'modal__main-buttons'>
            <button className = 'modal__main-buttons-button'>Main Page</button>
            <button className = 'modal__main-buttons-button' onClick={this.props.resetGame}>Play Again?</button>
          </div>
        </div>
      </div>
    );
  }
}

export default GameEndModal;
import React from 'react';
import { connect } from 'react-redux';
import { toggleTurn, playerAttack, enemyAttack } from '../actions/index';

export class PlayerArea extends React.Component {

  constructor(props) {
    super(props);

    this.callToggleTurn = this.callToggleTurn.bind(this);
    this.callPlayerAttack = this.callPlayerAttack.bind(this);
    this.callEnemyAttack = this.callEnemyAttack.bind(this);
  }

  callToggleTurn() {
    this.props.toggleTurn(this.props.playerTurn);
  }

  callPlayerAttack() {
    this.props.playerAttack(this.props.player, this.props.enemy);
//TODO: need some type of animation for PLAYER attack
    this.callToggleTurn();
    setTimeout(() => {
//TODO: need some type of animation for ENEMY attack
      this.callEnemyAttack();
    }, 210);
  }

  callEnemyAttack() {
    this.props.enemyAttack(this.props.enemy, this.props.player);
  }

  renderPlayerTurn() {
    let attack = <button type="button" onClick={this.callPlayerAttack}>Attack</button>
    let magic = <button type="button">Magic</button>
    let item = <button type="button">Item</button>
    let endTurn = <button type="button" onClick={this.callToggleTurn}>End Turn</button>
    return(
      <div>
        Player Turn<br />
        Choose an action:
        <span className="playerBtns">
          {attack}<span className="btnGap" />
          {magic}<span className="btnGap" />
          {item}<span className="btnGap" />
          {endTurn}
        </span>
      </div>
    );
  }

  renderEnemyTurn() {
    let endTurn = <button type="button" onClick={this.callToggleTurn}>Continue</button>
    return(
      <div>
        Enemy Turn<br />
        Enemy has done X. {endTurn}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.playerTurn ? this.renderPlayerTurn() : this.renderEnemyTurn() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playerTurn: state.playerTurn,
    player: state.player,
    enemy: state.enemy
  };
}

export default connect(mapStateToProps, {
  toggleTurn,
  playerAttack,
  enemyAttack
})(PlayerArea);
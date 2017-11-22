import React from 'react';
import { connect } from 'react-redux';
import { toggleTurn, playerAttack } from '../actions/index';

export class PlayerArea extends React.Component {

  constructor(props) {
    super(props);

    this.callToggleTurn = this.callToggleTurn.bind(this);
    this.callPlayerAttack = this.callPlayerAttack.bind(this);
  }

  callToggleTurn() {
    this.props.toggleTurn(this.props.playerTurn);
  }

  callPlayerAttack() {
    this.props.playerAttack(this.props.player, this.props.enemy);
    this.callToggleTurn();
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
        {attack}{magic}{item}{endTurn}
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

export default connect(mapStateToProps, {toggleTurn, playerAttack})(PlayerArea);
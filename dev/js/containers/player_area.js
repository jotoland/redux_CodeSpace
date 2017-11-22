import React from 'react';
import { connect } from 'react-redux';
import {initializePlayerHP} from '../actions';

export class PlayerArea extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.initializePlayerHP(this.props.player);
  }

  render() {
    return (
      <div>
        Player Information:<br />
        HP: {this.props.player.hp} <br />
        Strength: {this.props.player.strength} <br />
        Agility: {this.props.player.agility} <br />
        Vitality: {this.props.player.vitality} <br />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    player: state.player
  };
}

export default connect(mapStateToProps, {initializePlayerHP})(PlayerArea)
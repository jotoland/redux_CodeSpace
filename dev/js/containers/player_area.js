import React from 'react';
import { connect } from 'react-redux';
import {initializePlayerHP} from '../actions';
import {batman} from '../../images';

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
      <img src={batman} />
        <span className="playerInfo">
          {this.props.player.name}<br />
          HP: {this.props.player.hp} <br />
          Strength: {this.props.player.strength} <br />
          Agility: {this.props.player.agility} <br />
          Vitality: {this.props.player.vitality} <br />
        </span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    player: state.player
  };
}

export default connect(mapStateToProps, {initializePlayerHP})(PlayerArea);
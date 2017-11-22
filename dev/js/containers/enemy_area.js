import React from 'react';
import { connect } from 'react-redux';
import {initializeEnemyHP} from '../actions';


export class EnemyArea extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.initializeEnemyHP(this.props.enemy);
  }

  render() {
    return (
      <div>
        <img src={require(`../../images/enemy.jpg`)} />
        <div className="enemyInfo">
        
          {this.props.enemy.name}<br />
          HP: {this.props.enemy.hp} <br />
          Strength: {this.props.enemy.strength} <br />
          Agility: {this.props.enemy.agility} <br />
          Vitality: {this.props.enemy.vitality} <br />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    enemy: state.enemy
  };
}

export default connect(mapStateToProps, {initializeEnemyHP})(EnemyArea);
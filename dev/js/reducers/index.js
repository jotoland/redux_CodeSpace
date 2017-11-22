import { combineReducers } from 'redux';
import playerTurnReducer from './reducer_player_turn';
import enemyReducer from './reducer_enemy';
import playerReducer from './reducer_player';

const rootReducer = combineReducers({
	playerTurn: playerTurnReducer,
	enemy: enemyReducer,
	player: playerReducer
});

export default rootReducer;


import {PLAYER_ATTACK, ENEMY_INIT} from '../actions/types';
import {randomIntFromInterval} from '../helpers/helpers';

let DEFAULT_STATE = {
	name: 'YoyoEnemy',
	strength: randomIntFromInterval(6,12),
	agility: randomIntFromInterval(6,12),
	vitality: randomIntFromInterval(6,12),
	modifier: randomIntFromInterval(4,8)
}

export default function(state=DEFAULT_STATE, action={}) {
	switch(action.type) {
		case PLAYER_ATTACK:
			return {...state, ...action.payload};
		case ENEMY_INIT:
			return {...state, ...action.payload};
	}
	return state;
}
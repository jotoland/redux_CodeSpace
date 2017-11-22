import {ENEMY_ATTACK, PLAYER_INIT} from '../actions/types';
import {randomIntFromInterval} from '../helpers/helpers';

let DEFAULT_STATE = {
	name: 'YoyoNewWeb',
	strength: randomIntFromInterval(6,12),
	agility: randomIntFromInterval(6,12),
	vitality: randomIntFromInterval(6,12),
	modifier: randomIntFromInterval(4,8)
}

export default function(state=DEFAULT_STATE, action={}) {
	switch(action.type) {
		case ENEMY_ATTACK:
			return {...state, ...action.payload};
		case PLAYER_INIT:
			return {...state, ...action.payload};
	}
	return state;
}
import {
	TOGGLE_TURN,
	PLAYER_ATTACK,
	PLAYER_INIT,
	ENEMY_INIT,
	ENEMY_ATTACK
} from './types';
import {calculateHP, calculateDamage} from '../helpers/helpers';

export function toggleTurn(state) {
	return {
		type: TOGGLE_TURN,
		payload: state
	};
}

// export function processPlayerAttack(player, enemy) {
// 	return function(dispatch, getState) {
// 		dispatch(playerAttack(player,enemy));
// 		dispatch(toggleTurn(getState().playerTurn));
// 	};
// }

export function playerAttack(player, enemy) {
	enemy.hp = enemy.hp - calculateDamage(player.strength, player.modifier);
	return {
		type: PLAYER_ATTACK,
		payload: enemy
	}
}

export function enemyAttack(state) {
	return {
		type: ENEMY_ATTACK,
		payload: state
	}
}

export function initializePlayerHP(player) {
	player.hp = calculateHP(player.vitality, player.modifier);
	return {
		type: PLAYER_INIT,
		payload: player
	}
}

export function initializeEnemyHP(enemy) {
	enemy.hp = calculateHP(enemy.vitality, enemy.modifier);
	return {
		type: ENEMY_INIT,
		payload: enemy
	}
}
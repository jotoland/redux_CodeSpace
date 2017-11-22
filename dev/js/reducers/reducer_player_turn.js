import {TOGGLE_TURN} from '../actions/types';

export default function(state=true, action={}) {
	switch(action.type) {
		case TOGGLE_TURN:
			return !state;
	}

	return state;
}
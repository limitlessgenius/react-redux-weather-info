
import { FETCH_WEATHER } from '../actions/types'

const INITIAL_STATE = null

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_WEATHER: 
			return action.payload
		default:
			return state
	}
}
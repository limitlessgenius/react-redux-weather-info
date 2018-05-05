

import { FETCH_WEATHER } from '../actions/types'

export default (state, action) => {
	switch(action.type) {
		case FETCH_WEATHER: 
			console.log(action.payload)
			return action.payload
		default:
			console.log(state)
			return state
	}
}

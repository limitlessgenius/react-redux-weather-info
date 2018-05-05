

import keys from '../config/keys'
import { FETCH_WEATHER } from './types'

export const fetchWeather = () => {
	return dispatch => {
		dispatch({
			type: FETCH_WEATHER, 
			payload: 'WEATHER_DATA'
		})
	}
}




//console.log('MIDDLEWARE', reduxThunk)

// keys.WEATHER_INFO_KEY
// EXAMPLE CALL
// http://api.openweathermap.org/data/2.5/forecast?
// q=Barcelona,es
// &APPID=5308e936a98dbca642b24fcb6c118199

//To change state we need to dispatch an action




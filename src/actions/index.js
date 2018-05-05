

import { FETCH_WEATHER } from './types'
import { WEATHER_API_KEY } from '../config/keys'
// WHY REQUIRED IMPORT AS {} IF NOT DECONSTRUCT { WEATHER_API_KEY }
import axios from 'axios'

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?q=Barcelona,es&appid=${WEATHER_API_KEY}`

export const fetchWeather = () => {
	return dispatch => {
		axios
			.get(ROOT_URL)
			.then(res => {
				dispatch({
					type: FETCH_WEATHER, 
					payload: res.data.list[0].main.temp
				})
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






import { FETCH_WEATHER } from './types'
import { WEATHER_API_KEY } from '../config/keys'
// WHY REQUIRED IMPORT AS {} IF NOT DECONSTRUCT { WEATHER_API_KEY }
import axios from 'axios'
let ROOT_URL = "http://api.openweathermap.org/data/2.5/forecast?q="

export const fetchWeather = (city) => {
	
	ROOT_URL += `${city}&appid=${WEATHER_API_KEY}`

	return dispatch => {
		axios
			.get(ROOT_URL)
			.then(res => {
				console.log(res)
				dispatch({
					type: FETCH_WEATHER, 
					payload: res.data.list[0].main.temp
				})
			})
	}
}//To change state we need to dispatch an action




import axios from 'axios';

const API_KEY = '570e4e28693caecc6c625692ebf27c3f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forcast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
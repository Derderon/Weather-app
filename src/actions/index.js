import axios from 'axios';

const API_KEY = "166de3590f883ff4b2c508090e962919";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export default function fetchWeather(city, country) {
  const url = `${ROOT_URL}&q=${city},${country}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

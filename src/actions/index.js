import axios from "axios";
import { FETCH_WEATHER } from './types';

const API_KEY = "6a78596d062df78380eff5944c4e5567";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);  //return a promise

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
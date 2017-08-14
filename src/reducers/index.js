import { combineReducers } from 'redux';
//
import WeatherReducer from './WeatherReducer';

// maps state and reducer
const reducers = combineReducers({
  weather: WeatherReducer,
});

export default reducers; 
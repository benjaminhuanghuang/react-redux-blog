import { combineReducers } from 'redux';
//
import PostsReducer from './PostsReducer';

// maps state and reducer
const reducers = combineReducers({
  posts: PostsReducer,
});

export default reducers; 
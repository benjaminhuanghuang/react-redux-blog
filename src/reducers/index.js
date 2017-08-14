import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
//
import PostsReducer from './PostsReducer';

// maps state and reducer
const reducers = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default reducers; 
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postReducer from './PostReducer';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
  form: formReducer,
  posts: postReducer,
  user: userReducer
});

export default rootReducer;
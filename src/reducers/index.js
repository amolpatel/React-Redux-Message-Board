import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postReducer from './PostReducer';
import userReducer from './UserReducer';
import loadingReducer from './LoadingReducer';

const rootReducer = combineReducers({
  form: formReducer,
  posts: postReducer,
  user: userReducer,
  loading: loadingReducer
});

export default rootReducer;
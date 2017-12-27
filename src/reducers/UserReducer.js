import { GET_USER } from '../actions/UserActions';

export default function(state = { loading: true }, action) {
  switch(action.type) {
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
}
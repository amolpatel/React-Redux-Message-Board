import { database } from '../Firebase';
export const FETCH_POSTS = 'fetch_posts';

export function getPosts(){
  return dispatch => {
    database.on('value', data => {
      dispatch({
        type: FETCH_POSTS,
        payload: data.val()
      })
    })
  }
}

// firebase handles adding this to store with "database.on"
export function savePost(values) {
  return dispatch => database.push(values);
}

export function deletePost(key) {
  return dispatch => database.child(key).remove();
}


// return dispatch when database "value" happens
// then dispatch that action
// with redux thunk, we can dispatch a whole function as opposed to just type and payload

import { Action } from '@ngrx/store';
import { createReducer, on} from '@ngrx/store';
import { usersLoaded, users, postsLoaded, posts, postEdited } from './api.actions';


export type RootState = {
  users:users [],
  posts:posts[]



}
export const initialState:RootState = {
  users: [],
  posts: []

};


const _userReducer = createReducer(
  initialState,

  on(usersLoaded, (state, data) =>
  ({
    ...state,
    users:data.users
  }) ),

  on(postsLoaded, (state, data) =>
  ({
    ...state,
    posts:data.posts
  })),


  on(postEdited, (state, data) =>
  ({
    ...state,
    posts: state.posts.map(eachPost => eachPost.id === data.post.id ? data.post: eachPost)
  }))
)




export function userReducer(state: RootState | undefined, action: Action) {
  return _userReducer(state, action)
}

export interface users {
  name: string;
  id: number;
}
export interface posts {

title: string;
body: string;
id:number;
userId?:number;
}


import { createAction, props } from "@ngrx/store";

//for loading array of users
export const usersLoaded = createAction(
  '[User Data] user loaded',
  props<{ users: users[]  }>()
);

export const loadUsers = createAction(
  '[User Data] load user'
);

//for loading array of posts
export const postsLoaded = createAction(
  '[User Data] get posts',
  props<{posts: posts[]}>()
);

export const loadPosts = createAction(
  '[User Data] load posts',
  props<{ userId: number  }>(),

);

//for editing array of posts
export const editPost = createAction(
  '[Post Data] edit post',
  props<{ post: posts}>()
)
export const postEdited = createAction(
  '[Post Data]  post edited',
  props<{ post:posts }>()
)

export const createPost = createAction(
  '[Post Data] create post',
  props<{ post: posts }>()
  )

export const postCreated = createAction(
  '[Post Data] post created',
  props<{ post: posts}>()
  )

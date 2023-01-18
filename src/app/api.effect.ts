import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { editPost,postEdited, loadPosts, loadUsers, postsLoaded, usersLoaded } from './api.actions';
import { ApiCallService } from './ApiCall/api-call.service';

@Injectable()
export class ApiEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
    mergeMap(() => this.apiCallService.getUsers()
      .pipe(
        map(data => (usersLoaded({users:data}))),
        catchError(() => EMPTY)
      ))
    )
  );

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(loadPosts),
    mergeMap(action => this.apiCallService.getPosts(action.userId)
      .pipe(
        map(data => (postsLoaded({posts:data}))),
        catchError(() => EMPTY)
      ))
    )
  );

  editPosts$ = createEffect(() => this.actions$.pipe(
    ofType(editPost),
    mergeMap(action => this.apiCallService.editPost( action.post.id, action.post.title, action.post.body)
      .pipe(
        map(_ => (postEdited({post: {body:action.post.body, id:action.post.id, title:action.post.title} }))),
        catchError(() => EMPTY)
      ))
    )
  );




  constructor(
    private actions$: Actions,
    private apiCallService: ApiCallService
  ) {}
}

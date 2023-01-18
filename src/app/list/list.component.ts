import { Component, Input, OnInit } from '@angular/core';
import { ApiCallService } from '../ApiCall/api-call.service';
import { Observable, map, BehaviorSubject, Subject, tap } from 'rxjs';
import { Store } from '@ngrx/store'
import { RootState } from '../api.reducer';
import { createPost, loadPosts } from '../api.actions';
import { editPost } from '../api.actions';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: []
})
export class ListComponent implements OnInit {


  constructor(private api: ApiCallService, private store: Store<{rootValue: RootState}>) { }



  Uid:number = 0;
  UserClick:boolean = false
  specificUser$ = new Observable<string>;
  edit:boolean = false;

  title:string ="";
  body:string = "";
  postId:number = 0;
  createPost:boolean = false;
  length:number = 0;

  users$ = this.store.select('rootValue').pipe(map(data => data.users));
  posts$ = this.store.select('rootValue').pipe(map(data => data.posts));



  newPost(){
    this.title ="";
    this.body = "";
    //to show TextAreField
    this.edit = true;
    //to trigger dispatch function
    this.createPost = true;
    this.api.getUserId(this.Uid);
    const length$ = this.store.select('rootValue').pipe(tap((data)=> length = data.posts.length));
    console.log(this.length);



  }

  getBack(){
    this.UserClick = false;

  }

  //gets triggered when SingleUser is clicked
  UserClicked(userId:number){
    this.store.dispatch(loadPosts({userId: userId}));

    this.UserClick = true;
    this.Uid = userId;
    this.GetUser();
  }

  SaveEdit()
  {
    if(this.createPost != true)
    {this.store.dispatch(editPost({post: {body: this.body, title: this.title, id: this.postId}}));
    }

    this.store.dispatch(createPost({post: { id: this.Uid, title: this.title, body: this.body}}))
  }
  showEditInputFields(postId:number, title:string, body:string){
    this.edit = true;
    this.title = title;
    this.body = body;
    this.postId = postId;

  }

  GetUser(){
    this.specificUser$ = this.store.select('rootValue').pipe(map(data => data.users[this.Uid-1].name));
  }

  ngOnInit(): void {

  }

}




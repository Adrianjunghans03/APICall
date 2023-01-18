import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { posts, users } from '../api.actions';
import { ListComponent } from '../list/list.component';


@Injectable({
  providedIn: 'root',

})

export class ApiCallService implements OnInit{

  Url:string = "";

  // constructor(public getId: ListComponent)

  id:number = 0;
  public getUsers() {
    return this.http.get<users[]>('https://jsonplaceholder.typicode.com/users');
  }
  public getPosts(userId:number)
  {
    return this.http.get<posts[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }

  public editPost(postId:number, title:string, body:string)
  {
      return this.http.put<posts>(`https://jsonplaceholder.typicode.com/posts/11`, {method: 'PUT', body: JSON.stringify({
        id: postId,
        title: title,
        body: body
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

  }

  // public setConfig(userId:number)
  // {
  //   let url = userId.toString();
  //   this.Url = url;

  //   return this.Url;

  // }
  constructor(private http: HttpClient ) {
  }

  ngOnInit(): void {

  }


}






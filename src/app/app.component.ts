import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { loadPosts, loadUsers } from './api.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'API';

  constructor(private store: Store){}


  ngOnInit(): void {
   this.store.dispatch(loadUsers());
  }
}

import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/User';

@Component({
  selector: 'app-root',
  template: `<h1>hello</h1>
    <app-users *ngFor="let u of users" [user]="u"></app-users>
  `,
  styles: [`h1 {
    background: aqua
  }

  div {
    border: red solid 1px;
    margin: 10px
  }`]
})
export class AppComponent {

  users: User[];

  constructor(private httpClient: HttpClient) {
    httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => this.users = data);
  }
}

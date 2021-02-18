import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input()
  user: User;

  constructor() { }

  ngOnInit(): void {
  }

}

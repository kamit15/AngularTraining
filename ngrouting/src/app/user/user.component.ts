import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: any;
  constructor(private api: UserService) {
    api.getUsers()
      .subscribe(u => this.users = u);
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetail',
  standalone: false,
  templateUrl: './userdetail.component.html',
  styleUrl: './userdetail.component.css'
})
export class UserdetailComponent {
  id: string;
  userData: any;
  constructor(ar:ActivatedRoute, private api: UserService) {
    this.id = ar.snapshot.params['id'];
    this.api.getUserById(this.id).subscribe(d => { this.userData = d; })
  }

}

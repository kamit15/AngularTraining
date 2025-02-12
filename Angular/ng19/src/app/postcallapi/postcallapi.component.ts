import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-postcallapi',
  standalone: false,
  templateUrl: './postcallapi.component.html',
  styleUrl: './postcallapi.component.css'
})
export class PostcallapiComponent {
  data:any;
  constructor(private api:PostService){
    api.getPost().subscribe(p => this.data = p);
  }
}

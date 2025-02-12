import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postdetail',
  standalone: false,
  templateUrl: './postdetail.component.html',
  styleUrl: './postdetail.component.css'
})
export class PostdetailComponent {
  post: any;
  id: any;
  constructor(private http: PostService,ar:ActivatedRoute){
    this.id = ar.snapshot.params['id'];
    this.http.getPostById(this.id).subscribe(p => this.post = p);
  }
}

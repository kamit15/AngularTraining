import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-postsdetailapi',
  standalone: false,
  templateUrl: './postsdetailapi.component.html',
  styleUrl: './postsdetailapi.component.css'
})
export class PostsdetailapiComponent {
  post: any;
  constructor(private http: PostService){

  }
  submit(data: any) {
    this.http.getPostById(data.id).subscribe(p => this.post = p);
  }

}

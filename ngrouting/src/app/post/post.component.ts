import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  data: any;
  constructor(private api: PostService) {
    api.getPost().subscribe(p => this.data = p);
  }

  submit(post: any) {
    console.log('before post', post);
    this.api.savePost(post).subscribe(p => {
      console.log('after post', p);
      this.data.push(p);
    });
  }
}

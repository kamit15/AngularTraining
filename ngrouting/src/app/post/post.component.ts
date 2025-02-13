import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit, OnDestroy {
  data: Post[] = [];
  s: Subscription;

  constructor(private api: PostService) {
    console.log('Post Component Created');
    this.s = this.api.getPost().subscribe((p: Post[]) => this.data = p);
  }

  ngOnInit() : void{
    console.log('Post Component Initialized');
  }

  ngOnDestroy() : void{
    console.log('Post Component Destroyed');
    this.s.unsubscribe();
  }

  submit(post: Post) {
    console.log('before post', post);
    this.api.savePost(post).subscribe((p:Post)  => {
      console.log('after post', p);
      this.data.push(p);
    });
  }
}

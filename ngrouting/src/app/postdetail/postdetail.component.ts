import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-postdetail',
  standalone: false,
  templateUrl: './postdetail.component.html',
  styleUrl: './postdetail.component.css'
})
export class PostdetailComponent {
  post?: Post;
  id: string;
  s: Subscription;
  constructor(private http: PostService,ar:ActivatedRoute){
    console.log('Post Detail Component Created');
    this.id = ar.snapshot.params['id'];
    this.s = this.http.getPostById(this.id).subscribe((p: Post) => this.post = p);
  }

  ngOnInit() : void{
    console.log('Post Detail Component Initialized');
  }

  ngOnDestroy() : void{
    console.log('Post Detail Component Destroyed');
    this.s.unsubscribe();
  }
}

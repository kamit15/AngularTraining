import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getPostById(id:string) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

  savePost(post:any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post)
  }
}

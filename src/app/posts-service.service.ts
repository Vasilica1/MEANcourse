import { Injectable } from '@angular/core';
import { Post } from './posts/post.model';
import { Subject } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
      .subscribe((response) => {
        this.posts = response.posts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(post: Post) {
    this.http.post<{message: string}>('http://localhost:3000/api/posts', post)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }
}

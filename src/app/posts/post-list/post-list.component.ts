import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsServiceService } from 'src/app/posts-service.service';
import { Post } from '../post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{
  posts: Post[] = [];
  private postsSub: Subscription = new Subscription;

  constructor(private postService: PostsServiceService) {}

  ngOnInit() {
    this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

}

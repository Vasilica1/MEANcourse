import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsServiceService } from 'src/app/posts-service.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent = "";
  enteredTitle = "";

  constructor(private postService: PostsServiceService) {}

  onAddPost(form: NgForm) {
    if(form.invalid) {
      return;
    }
    const post = {
      title: form.value.title,
      content: form.value.content
    }
    this.postService.addPost(post);
    form.resetForm();
  }
}

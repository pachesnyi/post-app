import { Component, inject } from '@angular/core';
import { PostGridComponent } from "./ui/post-grid/post-grid.component";
import { PostStore } from "./stores/posts.store";
import { PostService } from "./services/post.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostGridComponent],
  template: `<app-post-grid [posts]="store.entities()"></app-post-grid>`,
  providers: [HttpClient, PostService, PostStore],
})
export class PostsComponent {
  readonly store = inject(PostStore);
}

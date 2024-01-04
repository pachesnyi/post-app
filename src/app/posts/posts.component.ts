import { Component, inject } from '@angular/core';
import { PostStore, SelectedPostStore } from "./stores/posts.store";
import { PostService } from "./services/post.service";
import { HttpClient } from "@angular/common/http";
import { PostComponent } from "./ui/post/post.component";
import { Post } from "./models/post.model";

const NO_DATA_PLACEHOLDER : string = "No data";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostComponent],
  styleUrl: './posts.component.scss',
  template: `
      <div class="title">
          <h2>Selected post User ID: {{ selectedPostStore.post()?.userId }}</h2>
      </div>
      <div class="grid">
          @for (post of postStore.entities();track post.id) {
              <app-post
                      [post]="post"
                      [selectedPost]="selectedPostStore.post()"
                      (selectedPostChange)="postSelection($event)"
              ></app-post>
          } @empty {
              {{ NO_DATA_PLACEHOLDER }}
          }
      </div>
  `,
  providers: [HttpClient, PostService, PostStore, SelectedPostStore],
})
export class PostsComponent {
  readonly postStore = inject(PostStore);
  readonly selectedPostStore = inject(SelectedPostStore);
  readonly NO_DATA_PLACEHOLDER = NO_DATA_PLACEHOLDER;

  postSelection(post: Post) : void {
    this.selectedPostStore.setSelected(post);
  }
}

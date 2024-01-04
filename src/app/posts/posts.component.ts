import { Component, inject } from '@angular/core';
import { PostStore, SelectedPostIdStore } from "./stores/posts.store";
import { PostService } from "./services/post.service";
import { HttpClient } from "@angular/common/http";
import { PostComponent } from "./ui/post/post.component";

const NO_DATA_PLACEHOLDER : string = "No data";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostComponent],
  styleUrl: './posts.component.scss',
  template: `
      <div class="grid">
          @for (post of postStore.entities(); track post.id) {
              <app-post
                      [post]="post"
                      [selectedPostId]="selectedPostIdStore.postId()"
                      (selectedPostChange)="postSelection($event)"
              ></app-post>
          } @empty {
              {{ NO_DATA_PLACEHOLDER }}
          }
      </div>
  `,
  providers: [HttpClient, PostService, PostStore, SelectedPostIdStore],
})
export class PostsComponent {
  readonly postStore = inject(PostStore);
  readonly selectedPostIdStore = inject(SelectedPostIdStore);
  readonly NO_DATA_PLACEHOLDER = NO_DATA_PLACEHOLDER;

  postSelection(postId: number) : void {
    this.selectedPostIdStore.setSelected(postId);
  }
}

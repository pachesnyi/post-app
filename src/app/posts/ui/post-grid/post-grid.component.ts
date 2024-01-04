import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from "../../models/post.model";
import { PostComponent } from "../post/post.component";

const NO_DATA_PLACEHOLDER : string = "No data";

@Component({
  selector: 'app-post-grid',
  standalone: true,
  imports: [PostComponent],
  template: `
      <div class="grid">
          @for (post of posts; track post.id) {
              <app-post [post]="post"></app-post>
          } @empty {
              {{NO_DATA_PLACEHOLDER}}
          }
      </div>
  `,
  styleUrl: './post-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostGridComponent {
  @Input() posts: Post[];

  protected readonly NO_DATA_PLACEHOLDER = NO_DATA_PLACEHOLDER;
}

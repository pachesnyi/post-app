import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { Post } from "../../models/post.model";
import { NgClass } from "@angular/common";


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [NgClass],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  @Input() post: Post;

  @Input('selectedPost')
  set selectedPost(value: Post | null) {
    this.selected = value?.id === this.post.id;

    // We should show title if element is not selected
    if (!this.selected) {
      this.updateClickCount(true);
    }
  }

  @Output() selectedPostChange: EventEmitter<Post> = new EventEmitter<Post>();

  selected: boolean;

  protected readonly clickCount = signal(0);

  postClick(): void {
    if (!this.selected) {
      this.selectedPostChange.emit(this.post);
    }

    this.updateClickCount();
  }

  private updateClickCount(reset?: boolean): void {
    this.clickCount.update((count) => {
      if (reset) {
        return 0;
      }

      // If post is selected we should not show title, and start loop from the userId
      if (count === 3) {
        return 1;
      }

      return count + 1;
    });
  }
}

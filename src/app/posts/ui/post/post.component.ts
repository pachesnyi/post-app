import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() post : Post;
  @Input('selectedPostId')
  set selectedPostId(value: number | null) {
    this.selected = value === this.post.id;
  }
  @Output() selectedPostChange : EventEmitter<Post["id"]> = new EventEmitter<Post["id"]>();

  selected: boolean;
}

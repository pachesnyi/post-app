import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsComponent } from './posts.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { PostService } from "./services/post.service";
import { PostStore, SelectedPostStore } from "./stores/posts.store";

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let postService: jasmine.SpyObj<PostService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsComponent, HttpClientTestingModule],
      providers: [
        { provide: PostService, useValue: postService },
        PostStore,
        SelectedPostStore,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('postSelection should update store with emitted post', () => {
    const post = {id: 1, body: "Lorem ipsum", userId: 2, title: "Lorem"};

    spyOn(component.selectedPostStore, 'setSelected');

    component.postSelection(post);

    expect(component.selectedPostStore.setSelected).toHaveBeenCalledWith(post);
  });
});

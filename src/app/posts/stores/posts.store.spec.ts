import { TestBed } from '@angular/core/testing';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { PostStore, SelectedPostStore } from "./posts.store";

describe('PostStore and SelectedPostStore', () => {
  let postServiceSpy: jasmine.SpyObj<PostService>;

  beforeEach(() => {
    postServiceSpy = jasmine.createSpyObj('PostService', ['getPosts']);

    TestBed.configureTestingModule({
      providers: [
        { provide: PostService, useValue: postServiceSpy },
        PostStore,
        SelectedPostStore,
      ],
    });
  });

  it('should fetch posts and save it into PostStore', async () => {
    const posts: Post[] = [{ id: 1, title: 'Test Post', body: 'Lorem ipsum', userId: 1 }];
    postServiceSpy.getPosts.and.returnValue(Promise.resolve(posts));

    const postStore = TestBed.inject(PostStore);

    await postStore.load();

    expect(postServiceSpy.getPosts).toHaveBeenCalled();
    expect(postStore.entities()).toEqual(posts);
  });

  it('should update SelectedPostStore', () => {
    const selectedPost: Post = { id: 1, title: 'Test Post', body: 'Lorem ipsum', userId: 1 };
    const selectedPostStore = TestBed.inject(SelectedPostStore);

    selectedPostStore.setSelected(selectedPost);

    expect(selectedPostStore.post()).toEqual(selectedPost);
  });
});

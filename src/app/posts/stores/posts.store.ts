import { inject } from '@angular/core';
import {
  signalStore,
  patchState,
  withHooks,
  withMethods,
} from '@ngrx/signals';
import { Post } from "../models/post.model";
import { PostService } from "../services/post.service";
import { setAllEntities, withEntities } from "@ngrx/signals/entities";

export const PostStore = signalStore(
  withEntities<Post>(),
  withMethods((store) => {
    const postService = inject(PostService);

    return {
      async load(): Promise<void> {
        const todos = await postService.getPosts();

        patchState(store, setAllEntities(todos));
      }
    };
  }),
  withHooks({onInit: (store) => store.load()})
);

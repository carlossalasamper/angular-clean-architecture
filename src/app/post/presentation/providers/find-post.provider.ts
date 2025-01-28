import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { mergeMap, tap } from 'rxjs';
import { produce } from 'immer';
import FindPostUseCase from '../../application/use-cases/find-post.use-case';
import FindPostProviderState from '../types/find-post-provider-state';
import PostEntity from '../../domain/entities/post.entity';
import { tapResponse } from '@ngrx/operators';

@Injectable()
export class FindPostProvider extends ComponentStore<FindPostProviderState> {
  readonly isLoading$ = this.select((state) => state.isLoading);
  readonly post$ = this.select((state) => state.post);

  constructor(private readonly findPostUseCase: FindPostUseCase) {
    super({
      isLoading: false,
      post: null,
    });
  }

  setIsLoading = this.updater((state, value: boolean) =>
    produce(state, (draft) => {
      draft.isLoading = value;
    })
  );

  setPost = this.updater((state, post: PostEntity) =>
    produce(state, (draft) => {
      draft.post = post;
    })
  );

  findPost = this.effect<number>((trigger$) => {
    return trigger$.pipe(
      tap(() => {
        this.setIsLoading(true);
      }),
      mergeMap((id) => {
        return this.findPostUseCase.execute(id).pipe(
          tapResponse(
            (post) => {
              this.setIsLoading(false);
              this.setPost(post);
            },
            (error) => {
              this.setIsLoading(false);
              console.error(error);
            }
          )
        );
      })
    );
  });
}

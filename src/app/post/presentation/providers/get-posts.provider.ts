import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { mergeMap, tap } from 'rxjs';
import { produce } from 'immer';
import GetPostsProviderState from '../types/get-posts-provider-state';
import GetPostsUseCase from '../../application/use-cases/get-posts.use-case';
import PostEntity from '../../domain/entities/post.entity';
import GetPostsPayload from '../../application/types/get-posts.payload';
import { tapResponse } from '@ngrx/operators';

@Injectable()
export class GetPostsProvider extends ComponentStore<GetPostsProviderState> {
  readonly isLoading$ = this.select((state) => state.isLoading);
  readonly results$ = this.select((state) => state.results);
  readonly filters$ = this.select((state) => state.filters);
  readonly pagination$ = this.select((state) => state.pagination);
  readonly count$ = this.select((state) => state.count);

  constructor(private readonly getPostsUseCase: GetPostsUseCase) {
    super({
      isLoading: false,
      results: [],
      count: 0,
      filters: {},
      pagination: {
        page: 1,
        pageSize: 10,
      },
    });
  }

  setIsLoading = this.updater((state, value: boolean) =>
    produce(state, (draft) => {
      draft.isLoading = value;
    })
  );

  setResults = this.updater((state, results: PostEntity[]) =>
    produce(state, (draft) => {
      draft.results = results;
    })
  );

  setCount = this.updater((state, count: number) =>
    produce(state, (draft) => {
      draft.count = count;
    })
  );

  mergePagination = this.updater((state, pagination: { page: number }) =>
    produce(state, (draft) => {
      draft.pagination = { ...draft.pagination, ...pagination };
    })
  );

  getPosts = this.effect((trigger$) => {
    return trigger$.pipe(
      tap(() => {
        this.setIsLoading(true);
        this.mergePagination({
          page: 1,
        });
      }),
      mergeMap(() => {
        const { pagination } = this.get();
        const input: GetPostsPayload = {
          page: pagination.page,
          pageSize: pagination.pageSize,
        };

        return this.getPostsUseCase.execute(input).pipe(
          tapResponse(
            (response) => {
              this.setResults(response.results);
              this.setCount(response.count);
              this.setIsLoading(false);
            },
            (error) => {
              console.error(error);
              this.setIsLoading(false);
            }
          )
        );
      })
    );
  });
}

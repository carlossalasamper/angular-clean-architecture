import { Observable } from 'rxjs';
import GetPostsPayload from '../../application/types/get-posts.payload';
import GetPostsResponse from '../../application/types/get-posts.response';
import PostEntity from '../entities/post.entity';
import { InjectionToken } from '@angular/core';

export interface IPostRepository {
  find: (id: number) => Observable<PostEntity>;
  get: (data: GetPostsPayload) => Observable<GetPostsResponse>;
}

export const IPostRepositoryToken = InjectionToken<IPostRepository>;

import { Inject, Injectable } from '@angular/core';
import {
  IPostRepository,
  IPostRepositoryToken,
} from '../../domain/specifications/post-repository.interface';
import GetPostsPayload from '../types/get-posts.payload';

@Injectable()
export default class GetPostsUseCase {
  constructor(
    @Inject(IPostRepositoryToken)
    private readonly postRepository: IPostRepository
  ) {}

  public execute(data: GetPostsPayload) {
    return this.postRepository.get(data);
  }
}

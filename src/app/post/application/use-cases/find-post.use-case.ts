import { Inject, Injectable } from '@angular/core';
import {
  IPostRepository,
  IPostRepositoryToken,
} from '../../domain/specifications/post-repository.interface';

@Injectable()
export default class FindPostUseCase {
  constructor(
    @Inject(IPostRepositoryToken)
    private readonly postRepository: IPostRepository
  ) {}

  public execute(id: number) {
    return this.postRepository.find(id);
  }
}

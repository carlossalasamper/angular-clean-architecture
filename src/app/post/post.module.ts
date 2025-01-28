import { NgModule } from '@angular/core';
import { IPostRepositoryToken } from './domain/specifications/post-repository.interface';
import PostRepository from './infrastructure/implementations/post-repository';
import FindPostUseCase from './application/use-cases/find-post.use-case';
import GetPostsUseCase from './application/use-cases/get-posts.use-case';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  providers: [
    FindPostUseCase,
    GetPostsUseCase,
    {
      provide: IPostRepositoryToken,
      useClass: PostRepository,
    },
  ],
})
export class PostModule {}

import { plainToInstance } from 'class-transformer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPostRepository } from '../../domain/specifications/post-repository.interface';
import GetPostsResponse from '../../application/types/get-posts.response';
import PostDto from '../models/post.dto';
import { map, Observable } from 'rxjs';
import PostEntity from '../../domain/entities/post.entity';

@Injectable()
class PostRepository implements IPostRepository {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private readonly httpClient: HttpClient) {}

  public find(id: number): Observable<PostEntity> {
    return this.httpClient
      .get(`${this.baseUrl}/${id}`)
      .pipe(map((response) => plainToInstance(PostDto, response).toDomain()));
  }

  public get(): Observable<GetPostsResponse> {
    return this.httpClient.get<Record<string, unknown>[]>(this.baseUrl).pipe(
      map((response) => ({
        results: response.map((post) =>
          plainToInstance(PostDto, post).toDomain()
        ),
        count: response.length,
      }))
    );
  }
}

export default PostRepository;

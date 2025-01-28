import PostEntity from '../../domain/entities/post.entity';

export default interface GetPostsResponse {
  results: PostEntity[];
  count: number;
}

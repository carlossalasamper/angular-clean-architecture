import PostEntity from '../../domain/entities/post.entity';

export default interface FindPostProviderState {
  isLoading: boolean;
  post: PostEntity | null;
}

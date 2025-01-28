import ListState from '../../../core/presentation/types/list-state';
import PostEntity from '../../domain/entities/post.entity';

type GetPostsProviderState = ListState<PostEntity>;

export default GetPostsProviderState;

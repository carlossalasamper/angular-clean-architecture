import { Expose } from 'class-transformer';
import GetPostsPayload from '../../application/types/get-posts.payload';
import PayloadDto from '../../../core/infrastructure/models/payload.dto';

export default class GetPostsQuery extends PayloadDto<GetPostsPayload> {
  @Expose()
  page!: number;

  @Expose()
  pageSize!: number;

  transform(payload: GetPostsPayload) {
    return {
      page: payload.page,
      pageSize: payload.pageSize,
    };
  }
}

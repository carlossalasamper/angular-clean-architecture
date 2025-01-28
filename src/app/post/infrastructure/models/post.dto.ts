import { Expose } from 'class-transformer';
import PostEntity from '../../domain/entities/post.entity';
import ResponseDto from '../../../core/infrastructure/models/response.dto';

export default class PostDto extends ResponseDto<PostEntity> {
  @Expose()
  id!: number;

  @Expose()
  userId!: number;

  @Expose()
  title!: string;

  @Expose()
  body!: string;

  toDomain() {
    return {
      id: this.id,
      userId: this.userId,
      title: this.title,
      body: this.body,
    };
  }
}

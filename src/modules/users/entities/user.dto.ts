import { Post } from '../../posts/entities/post.entity';

export class UserDto {
  name: string;
  email: string;
  post: Post;
}

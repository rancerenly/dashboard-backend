import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { PostDto } from './entities/post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private repository: Repository<Post>,
  ) {}
  findAll(): Promise<Post[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Post> {
    return this.repository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async update(id: number, post: PostDto) {
    await this.repository.update(id, post);
  }

  async create(post: PostDto): Promise<PostDto> {
    return this.repository.save(post);
  }
}

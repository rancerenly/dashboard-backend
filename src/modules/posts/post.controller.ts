import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto } from './entities/post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly service: PostService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param() id: number, @Req() req: Request) {
    return this.service.findOne(id);
  }

  @Post()
  async create(@Body() post: PostDto) {
    return this.service.create(post);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() post: PostDto) {
    return this.service.update(id, post);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.remove(id);
  }
}

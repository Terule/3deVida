import { type Post } from '@prisma/client';
import type IPost from '../interfaces/IPost';
import PostModel from '../models/PostModel';

const model = new PostModel();

export default class PostService {
  async create ({ title, content, userId, tableId, sessionDate }: IPost): Promise<Post> {
    const post = await model.create({ title, content, userId, tableId, sessionDate });
    return post;
  }

  async getAll (): Promise<Post[]> {
    const posts = await model.getAll();
    return posts;
  }

  async getById (id: number): Promise<Post | null> {
    const post = await model.getById(id);
    return post;
  }

  async update (id: number, { title, content, userId, tableId, sessionDate }: IPost): Promise<Post> {
    const post = await model.update(id, { title, content, userId, tableId, sessionDate });
    return post;
  }

  async delete (id: number): Promise<Post> {
    const post = await model.delete(id);
    return post;
  }
}

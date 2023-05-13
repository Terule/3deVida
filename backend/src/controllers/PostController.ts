import { type Request, type Response } from 'express';
import type IPost from '../interfaces/IPost';
import PostService from '../services/PostService';

const postService = new PostService();

export default class PostController {
  async create (req: Request, res: Response): Promise<Response> {
    const { title, content, userId, tableId, sessionDate } = req.body as IPost;
    const post = await postService.create({ title, content, userId: +userId, tableId: +tableId, sessionDate });
    return res.status(201).json(post);
  }

  async getAll (req: Request, res: Response): Promise<Response> {
    const posts = await postService.getAll();
    return res.status(200).json(posts);
  }

  async getById (req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const post = await postService.getById(+id);
    return res.status(200).json(post);
  }

  async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, content, userId, tableId, sessionDate } = req.body;
    const post = await postService.update(+id, { title, content, userId: +userId, tableId: +tableId, sessionDate });
    return res.status(200).json(post);
  }

  async delete (req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const post = await postService.delete(+id);
    return res.status(200).json(post);
  }
}

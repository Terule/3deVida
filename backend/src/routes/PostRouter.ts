import { Router } from 'express';
import PostController from '../controllers/PostController';

const postController = new PostController();

export default class PostRouter {
  public readonly router: Router;

  constructor () {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes (): void {
    this.router.post('/', postController.create);
    this.router.get('/', postController.getAll);
    this.router.get('/:id', postController.getById);
    this.router.put('/:id', postController.update);
    this.router.delete('/:id', postController.delete);
  }
}

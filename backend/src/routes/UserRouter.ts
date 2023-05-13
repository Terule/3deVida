import { Router } from 'express';
import UserController from '../controllers/UserController';
const userController = new UserController();

export default class UserRouter {
  public readonly router: Router;

  constructor () {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes (): void {
    this.router.post('/', userController.create);
    this.router.get('/', userController.getAll);
    this.router.get('/:id', userController.getById);
    this.router.put('/:id', userController.update);
    this.router.delete('/:id', userController.delete);
  }
}

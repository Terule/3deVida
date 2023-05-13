import { Router } from 'express';
import TableController from '../controllers/TableController';

const tableController = new TableController();

export default class TableRouter {
  public readonly router: Router;

  constructor () {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes (): void {
    this.router.post('/', tableController.create);
    this.router.get('/', tableController.getAll);
    this.router.get('/:id', tableController.getById);
    this.router.put('/:id', tableController.update);
    this.router.delete('/:id', tableController.delete);
  }
}

import { type Request, type Response } from 'express';
import TableService from '../services/TableService';

const tableService = new TableService();

export default class TableController {
  async create (req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    const table = await tableService.create(name);
    return res.status(201).json(table);
  }

  async getAll (req: Request, res: Response): Promise<Response> {
    const tables = await tableService.getAll();
    return res.status(200).json(tables);
  }

  async getAllWithPosts (req: Request, res: Response): Promise<Response> {
    const tables = await tableService.getAllWithPosts();
    return res.status(200).json(tables);
  }

  async getById (req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const table = await tableService.getById(+id);
    return res.status(200).json(table);
  }

  async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name } = req.body;
    const table = await tableService.update(+id, name);
    return res.status(200).json(table);
  }

  async delete (req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const table = await tableService.delete(+id);
    return res.status(200).json(table);
  }
}

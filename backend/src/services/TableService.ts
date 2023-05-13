import { type Table } from '@prisma/client';
import TableModel from '../models/TableModel';

const model = new TableModel();

export default class TableService {
  async create (name: string): Promise<Table> {
    const table = await model.create(name);
    return table;
  }

  async getAll (): Promise<Table | unknown> {
    const tables = await model.getAll();
    return tables;
  }

  async getAllWithPosts (): Promise<Table[]> {
    const tables = await model.getAllWithPosts();
    return tables;
  }

  async getById (id: number): Promise<Table | null> {
    const table = await model.getById(id);
    return table;
  }

  async update (id: number, name: string): Promise<Table> {
    const table = await model.update(id, name);
    return table;
  }

  async delete (id: number): Promise<Table> {
    const table = await model.delete(id);
    return table;
  }
}

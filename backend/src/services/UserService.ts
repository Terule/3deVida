import { type User } from '@prisma/client';
import type IUser from '../interfaces/IUser';
import UserModel from '../models/UserModel';

const model = new UserModel();

export default class UserService {
  async create ({ name, email, password, tableId, role }: IUser): Promise<User> {
    const user = await model.create({ name, email, password, tableId, role });
    return user;
  }

  async getAll (): Promise<User[]> {
    const users = await model.getAll();
    return users;
  }

  async getById (id: number): Promise<User | null> {
    const user = await model.getById(id);
    return user;
  }

  async update (id: number, { name, email, password, tableId, role }: IUser): Promise<User> {
    const user = await model.update(id, { name, email, password, tableId, role });
    return user;
  }

  async delete (id: number): Promise<User> {
    const user = await model.delete(id);
    return user;
  }
}

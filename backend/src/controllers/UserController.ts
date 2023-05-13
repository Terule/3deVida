import { type Request, type Response } from 'express';
import type IUser from '../interfaces/IUser';
import UserService from '../services/UserService';

const service = new UserService();

export default class UserController {
  async create (req: Request, res: Response): Promise<Response> {
    const { name, email, password, tableId, role } = req.body as IUser;
    const userDB = await service.create({ name, email, password, tableId: +tableId, role });
    const { password: _, tableId: __, ...user } = userDB;

    return res.status(201).json(user);
  }

  async getAll (_req: Request, res: Response): Promise<Response> {
    const usersDB = await service.getAll();
    const users = usersDB.map(user => {
      const { password, tableId, ...rest } = user;
      return rest;
    });
    return res.status(200).json(users);
  }

  async getById (req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const userDB = await service.getById(+id);
    if (userDB == null) {
      return res.status(404).json({ message: 'User not found' });
    }
    const { password: _, tableId: __, ...user } = userDB;
    return res.status(200).json(user);
  }

  async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, email, password, tableId, role } = req.body as IUser;
    const userDB = await service.update(+id, { name, email, password, tableId: +tableId, role });
    const { password: _, tableId: __, ...user } = userDB;
    return res.status(200).json(user);
  }

  async delete (req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const userDB = await service.delete(Number(id));
    const { password: _, tableId: __, ...user } = userDB;
    return res.status(200).json(user);
  }
}
//

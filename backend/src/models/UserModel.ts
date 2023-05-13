import { PrismaClient, type User } from '@prisma/client';
import type IUser from '../interfaces/IUser';

export default class UserModel {
  private readonly prisma: PrismaClient;

  constructor () {
    this.prisma = new PrismaClient();
  }

  async create (data: IUser): Promise<User> {
    const [user] = await this.prisma.$transaction([
      this.prisma.user.create({
        data: {
          ...data
        },
        include: {
          table: true
        }
      })
    ]);

    return user;
  }

  async getAll (): Promise<User[]> {
    const [users] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        include: {
          table: true
        }
      })
    ]);
    return users;
  }

  async getById (id: number): Promise<User | null> {
    const [user] = await this.prisma.$transaction([
      this.prisma.user.findUnique({
        where: {
          id
        },
        include: {
          table: true
        }
      })
    ]);

    return user;
  }

  async update (id: number, data: IUser): Promise<User> {
    const [user] = await this.prisma.$transaction([
      this.prisma.user.update({
        where: {
          id
        },
        data: {
          ...data
        },
        include: {
          table: true
        }
      })
    ]);

    return user;
  }

  async delete (id: number): Promise<User> {
    const [user] = await this.prisma.$transaction([
      this.prisma.user.delete({
        where: {
          id
        },
        include: {
          table: true
        }
      })
    ]);

    return user;
  }
}

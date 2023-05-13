import { PrismaClient, type Table } from '@prisma/client';

export default class TableModel {
  private readonly prisma: PrismaClient;

  constructor () {
    this.prisma = new PrismaClient();
  }

  async create (name: string): Promise<Table> {
    const [table] = await this.prisma.$transaction([
      this.prisma.table.create({
        data: {
          name
        }
      })
    ]);

    return table;
  }

  async getAll (): Promise<Table[]> {
    const [tables] = await this.prisma.$transaction([
      this.prisma.table.findMany()
    ]);
    return tables;
  }

  async getAllWithPosts (): Promise<Table[]> {
    const [tables] = await this.prisma.$transaction([
      this.prisma.table.findMany({
        include: {
          posts: true
        }
      })
    ]);
    return tables;
  }

  async getById (id: number): Promise<Table | null> {
    const [table] = await this.prisma.$transaction([
      this.prisma.table.findUnique({
        where: {
          id
        }
      })
    ]);

    return table;
  }

  async update (id: number, name: string): Promise<Table> {
    const [table] = await this.prisma.$transaction([
      this.prisma.table.update({
        where: {
          id
        },
        data: {
          name
        }
      })
    ]);

    return table;
  }

  async delete (id: number): Promise<Table> {
    const [table] = await this.prisma.$transaction([
      this.prisma.table.delete({
        where: {
          id
        }
      })
    ]);

    return table;
  }
}

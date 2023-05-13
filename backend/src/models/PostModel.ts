import { PrismaClient, type Post } from '@prisma/client';
import type IPost from '../interfaces/IPost';

export default class PostModel {
  private readonly prisma: PrismaClient;

  constructor () {
    this.prisma = new PrismaClient();
  }

  async create (data: IPost): Promise<Post> {
    const [post] = await this.prisma.$transaction([
      this.prisma.post.create({
        data: {
          ...data
        }
      })
    ]);
    return post;
  }

  async getAll (): Promise<Post[]> {
    const [posts] = await this.prisma.$transaction([
      this.prisma.post.findMany({
        include: {
          user: {
            select: {
              name: true
            }
          },
          table: {
            select: {
              name: true
            }
          }
        },
        orderBy: {
          sessionDate: 'desc'
        }
      })
    ]);
    return posts;
  }

  async getById (id: number): Promise<Post | null> {
    const [post] = await this.prisma.$transaction([
      this.prisma.post.findUnique({
        where: {
          id
        },
        include: {
          user: {
            select: {
              name: true
            }
          },
          table: {
            select: {
              name: true
            }
          }
        }
      })
    ]);
    return post;
  }

  async update (id: number, data: IPost): Promise<Post> {
    const [post] = await this.prisma.$transaction([
      this.prisma.post.update({
        where: {
          id
        },
        data: {
          ...data
        }
      })
    ]);
    return post;
  }

  async delete (id: number): Promise<Post> {
    const [post] = await this.prisma.$transaction([
      this.prisma.post.delete({
        where: {
          id
        }
      })
    ]);
    return post;
  }
}

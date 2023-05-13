import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
  await prisma.table.create({
    data: {
      name: 'Neteria'
    }
  });
  await prisma.table.create({
    data: {
      name: 'Exandria'
    }
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  }
  );

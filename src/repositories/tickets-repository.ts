import { prisma } from '@/config';

async function findTicketsTypes() {
  return prisma.ticketType.findMany();
}

export const ticketsRepository = {
    findTicketsTypes,
};

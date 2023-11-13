import { prisma } from '@/config';

async function findTicketsTypes() {
  return prisma.ticketType.findMany();
}

async function findTickets(id: number) {
  return prisma.ticket.findFirst({
    where: { id }
  });
}


export const ticketsRepository = {
    findTicketsTypes, findTickets
};

import { ticketsRepository } from '@/repositories';
import { TicketType } from '@/protocols';

async function ticketsTypes(): Promise<TicketType[]> {
  const tickets = await ticketsRepository.findTicketsTypes();

  return tickets;
}


async function ticketsGet(number: id): Promise<TicketType> {
  const tickets = await ticketsRepository.findTickets(id);

  return tickets;
}


export const ticketsService = {
    ticketsTypes,
    ticketsGet
};

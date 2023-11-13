import { ticketsRepository } from '@/repositories';
import { TicketType } from '@/protocols';

async function ticketsTypes(): Promise<TicketType[]> {
  const tickets = await ticketsRepository.findTicketsTypes();

  return tickets;
}


export const ticketsService = {
    ticketsTypes
};

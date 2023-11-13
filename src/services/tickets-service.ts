import { ticketsRepository } from '@/repositories';
import { TicketType, Ticket } from '@/protocols';

async function ticketsTypes(): Promise<TicketType[]> {
  const tickets = await ticketsRepository.findTicketsTypes();

  return tickets;
}


/*async function ticketsGet(id: number): Promise<Ticket> {
  const ticket = await ticketsRepository.findTickets(id);

  return ticket;

}*/


export const ticketsService = {
    ticketsTypes
};

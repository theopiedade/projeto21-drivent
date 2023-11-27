import { TicketStatus } from '@prisma/client';
import { forbiddenError, notFoundError } from '@/errors';
import { bookingRepository, enrollmentRepository, paymentsRepository, ticketsRepository } from '@/repositories';

async function getBooking(userId: number) {
  
    const booking = await bookingRepository.findBooking(userId);
    if (!booking) throw notFoundError();

    const bookingReturn = {
      id: booking.id,
      Room: booking.roomId
    }
  
    return bookingReturn;
  }

async function postBooking(roomId: number, userId: number) {
  
    const enrollments = await enrollmentRepository.findWithAddressByUserId(userId);
    if (!enrollments) throw notFoundError(); 

    const tickets = await ticketsRepository.findTicketByEnrollmentId(enrollments.id);
    if (tickets.status !== TicketStatus.PAID) throw forbiddenError();

    const ticketType = await ticketsRepository.findTicketTypesById(tickets.ticketTypeId);
    if (ticketType.isRemote) throw forbiddenError();

    const booking = await bookingRepository.findBooking(userId);
    if (!booking) throw notFoundError();


    return booking.id;
}

  export const bookingService = {
    getBooking,
    postBooking
  };
import { TicketStatus } from '@prisma/client';
import { forbiddenError, notFoundError } from '@/errors';
import { bookingRepository, enrollmentRepository, hotelRepository, ticketsRepository } from '@/repositories';
import { CreateBookingParams } from "@/protocols";

async function getBooking(userId: number) {
  
    const booking = await bookingRepository.findBooking(userId);
    if (!booking) throw notFoundError();

    const room = await hotelRepository.findRoomsById(booking.roomId);

    const bookingReturn = {
      id: booking.id,
      Room: {
        id: room.id,
        name: room.name,
        capacity: room.capacity,
        hotelId: room.hotelId,
        createdAt: room.createdAt,
        updatedAt: room.updatedAt
      }
    }
  
    return bookingReturn;
  }

async function postBooking(roomId: number, userId: number) {

  const room = await hotelRepository.findRoomsById(roomId);
  if (!room) throw notFoundError();

  const enrollments = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollments) throw notFoundError(); 

  const tickets = await ticketsRepository.findTicketByEnrollmentId(enrollments.id);
  if (tickets.status !== TicketStatus.PAID) throw forbiddenError();

  const ticketType = await ticketsRepository.findTicketTypesById(tickets.ticketTypeId);
  if (ticketType.isRemote || !ticketType.includesHotel) throw forbiddenError();

  const roomsReserved = await hotelRepository.findManyRoomsById(room.id);
  if (roomsReserved.length === room.capacity) throw forbiddenError();

  const bookingData: CreateBookingParams = {
    userId,
    roomId
  }

  const booking = await bookingRepository.createBooking(bookingData)
  return booking
}

  export const bookingService = {
    getBooking,
    postBooking
  };
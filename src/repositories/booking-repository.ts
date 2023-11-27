import { prisma } from '@/config';
import { CreateBookingParams } from '@/protocols';

async function findBooking(userId: number) {
  return prisma.booking.findUnique({
    where: {
        userId: userId,
      }
    });
}

async function findBookingByRoomId(roomId: number) {
  return prisma.booking.findMany({
    where: {
        roomId: roomId,
      }
    });
}

async function createBooking(booking: CreateBookingParams) {
    const result = await prisma.booking.create({
      data: booking
  })
  return result
}

async function changeBooking(userId: number, roomId: number) {
  const result = await prisma.booking.update({
    where: {
      userId
    },
    data: {
      roomId: roomId
    }
  });
  return result;
}


export const bookingRepository = {
  findBooking,
  findBookingByRoomId,
  createBooking,
  changeBooking
};
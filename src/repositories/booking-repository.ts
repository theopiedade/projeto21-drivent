import { prisma } from '@/config';

async function findBooking(userId: number) {
  return prisma.booking.findUnique({
    where: {
        userId: userId,
      }
    });
}


export const bookingRepository = {
  findBooking
};
import { prisma } from '@/config';

async function findBooking(userId: number) {
  return prisma.hotel.findUnique({
    where: {
        id: userId,
      }
    });
}

export const bookingRepository = {
  findBooking
};
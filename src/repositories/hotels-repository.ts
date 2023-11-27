import { prisma } from '@/config';

async function findHotels() {
  return prisma.hotel.findMany();
}

async function findRoomsByHotelId(hotelId: number) {
  return prisma.hotel.findFirst({
    where: {
      id: hotelId,
    },
    include: {
      Rooms: true,
    },
  });
}

async function findRoomsById(roomId: number) {
  return prisma.room.findUnique({
    where: {
        id: roomId,
      }
    });
}

async function findManyRoomsById(roomId: number) {
  return prisma.room.findMany({
    where: {
        id: roomId,
      }
    });
}

export const hotelRepository = {
  findHotels,
  findRoomsByHotelId,
  findRoomsById,
  findManyRoomsById
};
import { prisma } from '@/config';
import { Hotel } from '@prisma/client';

async function findHotels(): Promise<Hotel[]> {
    const result = await prisma.hotel.findMany();
    return result
}

async function findHotelsById(id: number): Promise<Hotel> {
    const result = await prisma.hotel.findUnique({
        where: { id }
    })
    return result
}


export const hotelsRepository = {
    findHotels,
    findHotelsById
}
import { notFoundError } from "@/errors";
import { CreateTicketParams } from "@/protocols";
import { hotelsRepository } from "@/repositories"

async function getHotels() {
    const hotels = await hotelsRepository.findHotels()
    return hotels;
}

async function getHotelsById(userId: number) {
    const hotels = await hotelsRepository.findHotelsById(userId);
    if (!hotels) throw notFoundError();


    return hotels;
}


export const hotelsService = {
    getHotels,
    getHotelsById,
}
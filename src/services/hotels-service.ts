import { notFoundError, paymentRequiredError } from "@/errors";
import { enrollmentsService, ticketsService } from "@/services";
import { hotelsRepository } from "@/repositories"


async function getHotels(userId: number) {
    
    const enrollmentsCheck = await enrollmentsService.getOneWithAddressByUserId(userId)
    if (!enrollmentsCheck || enrollmentsCheck.name == 'NotFoundError') throw notFoundError()

    const ticketPayedCheck = await ticketsService.getTicketByUserId(userId)
    if (ticketPayedCheck.status != 'PAID') throw paymentRequiredError();

    const ticketTypeId = ticketPayedCheck.ticketTypeId
    
    const ticketTypeData = await ticketsService.getTicketTypeById(ticketTypeId)
    if (ticketTypeData.isRemote || !ticketTypeData.includesHotel) throw paymentRequiredError();


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
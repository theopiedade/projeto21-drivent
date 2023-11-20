import { Response } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import { hotelsService } from '@/services';
import httpStatus from 'http-status';

export async function getHotels(req: AuthenticatedRequest, res: Response) {
    const hotels = await hotelsService.getHotels()
    return res.status(httpStatus.OK).send(hotels)
}

export async function getHotelsById(req: AuthenticatedRequest, res: Response) {
    const { hotelId } = req;
    const hotels = await hotelsService.getHotelsById(hotelId)
    return res.status(httpStatus.OK).send(hotels)
}

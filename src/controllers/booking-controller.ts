import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import { bookingService } from '@/services';

export async function getBooking(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  const booking = await bookingService.getBooking(userId);
  res.status(httpStatus.OK).send(booking);
}

export async function postBooking(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const roomId = Number(req.params.roomId);

  const booking = await bookingService.postBooking(roomId, userId);
  res.status(httpStatus.OK).send(booking);
}

export async function changeBooking(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const roomId = Number(req.params.roomId);

  const booking = await bookingService.changeBooking(roomId, userId);
  res.status(httpStatus.OK).send(booking);
}

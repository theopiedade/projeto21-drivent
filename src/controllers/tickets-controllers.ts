import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { ticketsService } from '@/services';

export async function getTicketsTypes(req: Request, res: Response) {

  const result = await ticketsService.ticketsTypes();

  return res.status(httpStatus.OK).send(result);
}

/*
export async function getTickets(req: Request, res: Response) {
  const { userId } = req.query as { userId: number};

  const result = await ticketsService.ticketsGet(userId);

  return res.status(httpStatus.OK).send(result);
}
*/


export async function postTickets(req: Request, res: Response) {

  const result = await ticketsService.ticketsTypes();

  return res.status(httpStatus.OK).send(result);
}
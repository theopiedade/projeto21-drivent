import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { ticketsService } from '@/services';

export async function getTicketsTypes(req: Request, res: Response) {

  const result = await ticketsService.ticketsTypes();

  return res.status(httpStatus.OK).send(result);
}

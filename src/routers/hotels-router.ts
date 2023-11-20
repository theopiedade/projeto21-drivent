import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { getHotels, getHotelsById } from '@/controllers';

const hotelsRouter = Router();

hotelsRouter
  .all('/*', authenticateToken)
  .get('/hotels', getHotels)
  .post('/hotels/:hotelId', getHotelsById);

export { hotelsRouter };
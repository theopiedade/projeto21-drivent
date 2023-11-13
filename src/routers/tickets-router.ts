import { Router } from 'express';
import { getTicketsTypes} from '@/controllers';

const ticketsRouter = Router();

ticketsRouter.get('/tickets/types', getTicketsTypes);

export { ticketsRouter };
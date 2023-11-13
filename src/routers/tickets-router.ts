import { Router } from 'express';
import { getTicketsTypes, getTickets} from '@/controllers';
import { authenticateToken } from '@/middlewares';

const ticketsRouter = Router();

ticketsRouter
.get('/types', authenticateToken, getTicketsTypes)
.get('/', getTickets)


export { ticketsRouter };
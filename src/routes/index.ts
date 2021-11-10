import { Router } from 'express';
import ticketsRoutes from './ticket.routes';

const routes = Router();

routes.use('/ticket', ticketsRoutes);

export default routes;

import { Router, Request, Response } from 'express';

import CloseTicketService from '../services/CloseTicketService';
import CreateTicketService from '../services/CreateTicketService';
import ListAllTicketsService from '../services/ListAllTicketsService';
import DeleteTicketService from '../services/DeleteTicketService';
import ListAllTicketsByDayService from '../services/ListAllTicketsByDayService';

const ticketsRoutes = Router();

ticketsRoutes.get('/', async (request, response) => {
  try {
    const listTicket = new ListAllTicketsService();
    const ticket = await listTicket.execute();
    return response.json(ticket);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

ticketsRoutes.get('/byDay', async (request, response) => {
  try {
    const { now } = request.body;
    const listTicketByDay = new ListAllTicketsByDayService();
    const ticket = await listTicketByDay.execute({ now });
    return response.json(ticket);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

ticketsRoutes.post('/', async (request, response) => {
  try {
    const { license_plate } = request.body;
    const createTicket = new CreateTicketService();
    const ticketCreated = await createTicket.execute({
      license_plate,
    });
    return response.json(ticketCreated);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

ticketsRoutes.put('/', async (request: Request, response: Response) => {
  try {
    const { id } = request.body;
    const closeTicket = new CloseTicketService();
    const ticket = await closeTicket.execute({
      id,
    });
    return response.json(ticket);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

ticketsRoutes.delete('/', async (request: Request, response: Response) => {
  try {
    const { id } = request.body;
    const deleteTicket = new DeleteTicketService();
    const ticket = await deleteTicket.execute({
      id,
    });
    return response.json(ticket);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default ticketsRoutes;

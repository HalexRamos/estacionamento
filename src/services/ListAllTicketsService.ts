import { getCustomRepository } from 'typeorm';

import Ticket from '../models/Ticket';
import TicketRepository from '../database/repositories/TicketRepository';

class ListAllTicketsService {
  public async execute(): Promise<Ticket> {
    const ticketRepository = getCustomRepository(TicketRepository);

    const tickets = ticketRepository.findAndCount();

    return tickets;
  }
}

export default ListAllTicketsService;

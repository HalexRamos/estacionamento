import { getCustomRepository, Like } from 'typeorm';

import Ticket from '../models/Ticket';
import TicketRepository from '../database/repositories/TicketRepository';

interface Request {
  now: Date;
}

class ListAllTicketsByDayService {
  public async execute({ now }: Request): Promise<Ticket> {
    const ticketRepository = getCustomRepository(TicketRepository);

    const tickets = ticketRepository.find({
      entry_time: Like(`%${now}%`),
    });

    return tickets;
  }
}

export default ListAllTicketsByDayService;

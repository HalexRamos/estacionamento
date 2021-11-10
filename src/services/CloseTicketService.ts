import { getCustomRepository } from 'typeorm';

import Ticket from '../models/Ticket';
import TicketRepository from '../database/repositories/TicketRepository';

interface Request {
  id: string;
}

class CloseTicketService {
  public async execute({ id }: Request): Promise<Ticket> {
    const ticketRepository = getCustomRepository(TicketRepository);

    const departure_time = new Date();

    const ticketCreated = ticketRepository
      .createQueryBuilder()
      .update(Ticket)
      .set({
        departure_time,
      })
      .where({ id })
      .execute();

    return ticketCreated;
  }
}

export default CloseTicketService;

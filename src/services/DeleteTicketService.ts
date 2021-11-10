import { getCustomRepository } from 'typeorm';

import Ticket from '../models/Ticket';
import TicketRepository from '../database/repositories/TicketRepository';

interface Request {
  id: string;
}

class DeleteTicketService {
  public async execute({ id }: Request): Promise<Ticket> {
    const ticketRepository = getCustomRepository(TicketRepository);

    const ticketDeleted = ticketRepository
      .createQueryBuilder()
      .softDelete()
      .from(Ticket)
      .where({ id })
      .execute();

    return ticketDeleted;
  }
}

export default DeleteTicketService;

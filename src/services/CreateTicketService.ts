import { getCustomRepository } from 'typeorm';

import Ticket from '../models/Ticket';
import TicketRepository from '../database/repositories/TicketRepository';

interface Request {
  license_plate: string;
}

class CreateTicketService {
  public async execute({ license_plate }: Request): Promise<Ticket> {
    const ticketRepository = getCustomRepository(TicketRepository);

    const entry_time = new Date();

    const ticketCreated = await ticketRepository
      .createQueryBuilder()
      .insert()
      .into(Ticket)
      .values([{ license_plate, entry_time }])
      .execute();

    return ticketCreated;
  }
}

export default CreateTicketService;

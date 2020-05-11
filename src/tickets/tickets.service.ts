import { Injectable, Inject } from '@nestjs/common';
import { Ticket } from './interfaces/ticket.interface';
import { Tickets } from './tickets.entity';

@Injectable()
export class TicketsService {
    constructor(
    @Inject('TICKETS_REPOSITORY') private readonly catsRepository: typeof Tickets,
    ) {}
      
    tickets: Ticket[] = [];

    create(ticket: Ticket) {
        console.log('ticket', ticket);
        this.tickets.push(ticket);
        return this.tickets;
    }

    findAll(): Ticket[] {
        return this.tickets;
    }

    findOne(id: string): Ticket {
        return this.tickets.find(res => res.id === id);
    }
    delete(id: string): Ticket[] {
        const index = this.tickets.findIndex(p => p.id === id);
        this.tickets.splice(index, 1);
        return this.tickets;
    }
}

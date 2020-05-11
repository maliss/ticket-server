import { Tickets } from "./tickets.entity";


export const ticketsProviders = [
  {
    provide: 'TICKETS_REPOSITORY',
    useValue: Tickets,
  },
];

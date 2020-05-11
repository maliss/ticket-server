import { Module } from '@nestjs/common';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';
import { DatabaseModule } from 'src/common/database/database.module';
import { ticketsProviders } from './tickets.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [TicketsController],
    providers: [TicketsService, ...ticketsProviders]
})
export class TicketsModule {}

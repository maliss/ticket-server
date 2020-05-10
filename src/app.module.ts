import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TicketsController } from './tickets/tickets.controller';

@Module({
  imports: [GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql']
  })],
  controllers: [AppController, TicketsController],
  providers: [AppService],
})
export class AppModule {}

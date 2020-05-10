import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [
    TicketsModule,
    GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql']
  }), TicketsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

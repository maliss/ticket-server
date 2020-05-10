import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TicketsModule } from './tickets/tickets.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { TicketsController } from './tickets/tickets.controller';

@Module({
  imports: [
    TicketsModule,
    GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql']
  }), TicketsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(TicketsController);

    // To run only on GET and endpoint tickets
    // consumer.apply(LoggerMiddleware).forRoutes({ path: 'tickets', method: RequestMethod.GET });

    // To run always except on tickets GET
    // consumer.apply(LoggerMiddleware).exclude({ path: 'tickets', method: RequestMethod.GET }).forRoutes(TicketController);
  }
}

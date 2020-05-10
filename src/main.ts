import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // You can register global middleware here
  // app.use(cors(), helmet(), morgan(), multer())

  // define the options or config settings for swagger document
  const options = new DocumentBuilder()
    .setTitle('Tickets Example')
    .setDescription('JWT Authentication demo with MongoDB')
    .setVersion('1.0')
    .addTag('tickets')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  // setup the swagger module
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
  
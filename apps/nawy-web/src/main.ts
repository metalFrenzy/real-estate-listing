import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 4000);
  console.log(process.env.DB_USER,
    process.env.DB_PASSWORD,
    process.env.DB_NAME)
}
bootstrap();

import { Module } from '@nestjs/common';
import { ApartmentsModule } from './apartments/apartments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartment } from './apartments/data/apartments.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password:'1517',
      database: 'apartment_db',
      entities: [Apartment],
      logging: true,
    }),
    ApartmentsModule

  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { ApartmentsModule } from './apartments/apartments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartment } from './apartments/data/apartments.entity';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from './data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      dataSourceOptions,
    ),
    ApartmentsModule,
    ConfigModule.forRoot({
      isGlobal: true
    })

  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

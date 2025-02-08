import { Module } from '@nestjs/common';
import { ApartmentsController } from './apartments.controller';
import { ApartmentsService } from './apartments.service';
import { ApartmentsRepository } from './data/apartments.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartment } from './data/apartments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Apartment])],
  controllers: [ApartmentsController],
  providers: [ApartmentsService,ApartmentsRepository]
})
export class ApartmentsModule {}

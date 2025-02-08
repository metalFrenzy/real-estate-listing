import { Injectable } from '@nestjs/common';
import { ApartmentsRepository } from './data/apartments.repository';
import { Apartment } from './data/apartments.entity';

@Injectable()
export class ApartmentsService {
    constructor(private readonly apartmentsRepository: ApartmentsRepository) { }

    getApartments(): Promise<Apartment[]> {
        return this.apartmentsRepository.findAll();
    }

    getApartmentById(id: number): Promise<Apartment | null> {
        return this.apartmentsRepository.findById(id);
    }

    addApartment(apartment: Partial<Apartment>): Promise<Apartment> {
        return this.apartmentsRepository.createApartment(apartment)
    }
}
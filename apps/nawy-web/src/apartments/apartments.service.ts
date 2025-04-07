import { Injectable } from '@nestjs/common';
import { ApartmentsRepository } from './data/apartments.repository';
import { Apartment } from './data/apartments.entity';
import { ApartmentDto } from './data/apartment.dto';

@Injectable()
export class ApartmentsService {
    constructor(private readonly apartmentsRepository: ApartmentsRepository) { }

    async getApartments(): Promise<ApartmentDto[]> {
        const apartments = await this.apartmentsRepository.findAll();
        return apartments.map((apartment) => ({
            title: apartment.title,
            area: apartment.area,
            bedrooms: apartment.bedrooms,
            bathrooms: apartment.bathrooms,
            size: apartment.size,
            price: apartment.price,
            image_urls: apartment.image_urls,

        }))
    }

    getApartmentById(id: number): Promise<Apartment | null> {
        return this.apartmentsRepository.findById(id);
    }

    addApartment(apartment: Partial<Apartment>): Promise<Apartment> {
        return this.apartmentsRepository.createApartment(apartment)
    }

    searchApartments(title?: string, developer?: string): Promise<Apartment[]> {
        return this.apartmentsRepository.searchApartments(title, developer);
    }

}

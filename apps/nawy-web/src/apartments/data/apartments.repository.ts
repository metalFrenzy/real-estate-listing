/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Apartment } from "./apartments.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ApartmentsRepository {
    constructor(
        @InjectRepository(Apartment)
        private readonly repository: Repository<Apartment>,
    ) { }

    /**
   * Retrieves all apartments from the database.
   * @returns A promise that resolves to an array of Apartment entities.
   */
    findAll(): Promise<Apartment[]> {
        return this.repository.find();
    }

    /**
     * Retrieves a single apartment by its ID.
     * @param id - The ID of the apartment to retrieve.
     * @returns A promise that resolves to the Apartment entity or null if not found.
     */
    findById(id: number): Promise<Apartment | null> {
        return this.repository.findOneBy({ id });
    }

    /**
    * Creates and saves a new apartment in the database.
    * @param apartment - Partial Apartment data to be saved.
    * @returns A promise that resolves to the newly created Apartment entity.
    */
    createApartment(apartment: Partial<Apartment>): Promise<Apartment> {
        const newApartment = this.repository.create(apartment);
        return this.repository.save(newApartment);
    }
}
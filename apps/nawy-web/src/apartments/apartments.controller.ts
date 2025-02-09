import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import { Apartment } from './data/apartments.entity';

@Controller('apartments')
export class ApartmentsController {
    constructor(private readonly apartmentsService: ApartmentsService) { }

    /**
     * fetch all apartments
     * @returns an array of Apartment entites
     */
    @Get()
    getApartments(): Promise<Apartment[]> {
        return this.apartmentsService.getApartments();
    }

    /**
    * Fetch apartments with search and filter functionality.
    * @param query Filter parameters (unitName, unitNumber, project).
    * @returns an array of Apartment entities
    */
    @Get('search')
    searchApartments(@Query('title') title?: string, @Query('developer') developer?: string): Promise<Apartment[]> {
        return this.apartmentsService.searchApartments(title, developer);
    }

    @Get(':id')
    getApartmentById(@Param('id') id: number): Promise<Apartment | null> {
        return this.apartmentsService.getApartmentById(id);
    }

    @Post()
    addApartment(@Body() apartment: Partial<Apartment>): Promise<Apartment> {
        return this.apartmentsService.addApartment(apartment);
    }
}

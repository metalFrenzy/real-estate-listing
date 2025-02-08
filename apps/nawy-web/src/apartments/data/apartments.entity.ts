/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('apartments')
export class Apartment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    area: string;

    @Column()
    developer: string;

    @Column()
    description: string;

    @Column('decimal')
    price: number;

    @Column()
    type: string;

    @Column()
    bedrooms: number;

    @Column()
    bathrooms: number;  

    @Column()
    size: number;

    @Column('text', { array: true })
    image_urls: string[];
}
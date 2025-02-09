import { DataSource, DataSourceOptions } from "typeorm";
import { Apartment } from "./apartments/data/apartments.entity";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: 'postgres',
    password: '1517',
    database: 'apartment_db',
    entities: [Apartment],
    logging: true,
    migrations: ['dist/migrations/*.js'],
    migrationsRun: true,
}


const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
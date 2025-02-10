import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateApartmentsTable1739114713805 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "apartments",
            columns: [
                { name: "id", type: "serial", isPrimary: true },
                { name: "title", type: "varchar", isNullable: false },
                { name: "area", type: "varchar", isNullable: false },
                { name: "developer", type: "varchar", isNullable: false },
                { name: "description", type: "text", isNullable: false },
                { name: "price", type: "numeric", isNullable: false },
                { name: "type", type: "varchar", isNullable: false },
                { name: "bedrooms", type: "int", isNullable: false },
                { name: "bathrooms", type: "int", isNullable: false },
                { name: "size", type: "int", isNullable: false },
                { name: "image_urls", type: "text", isArray: true, isNullable: false }
            ],
        }));

        await queryRunner.query(`
            INSERT INTO apartments 
            (title, area, developer, description, price, type, bedrooms, bathrooms, size, image_urls)
            VALUES
            (
                'Palm Hills villa',
                'October, Giza',
                'Palm Hills',
                'Palm hills villa is breathtaking modern retreat featuring a sleek glass design. With four luxurious bedrooms and five bathrooms, this villa offers the epitome of contemporary luxury living. The open-concept living area boasts floor-to-ceiling windows, bathing the space in natural light and offering panoramic views. featuring an infinity pool and outdoor living space',
                5000000,
                'villa',
                5,
                4,
                300,
                ARRAY['https://res.cloudinary.com/dt3xadu3e/image/upload/v1738840046/vila1_e3du5t.png', 'https://res.cloudinary.com/dt3xadu3e/image/upload/v1738842919/inside_oxy4s0.png']
            ),
            (
                'Mountain View villa',
                'New Cairo, Cairo',
                'Mountain View',
                'Mountain view villa is breathtaking modern retreat featuring a sleek glass design. With four luxurious bedrooms and five bathrooms, this villa offers the epitome of contemporary luxury living. The open-concept living area boasts floor-to-ceiling windows, bathing the space in natural light and offering panoramic views.',
                6000000,
                'villa',
                5,
                4,
                350,
                ARRAY['https://res.cloudinary.com/dt3xadu3e/image/upload/v1738840019/vila2_zt4ux7.png', 'https://res.cloudinary.com/dt3xadu3e/image/upload/v1738842919/inside_oxy4s0.png']
            ),
            (
                'Stone Residence apartment',
                'Kattemya, Cairo',
                'Stone Residence',
                'Mountain view villa is breathtaking modern retreat featuring a sleek glass design. With four luxurious bedrooms and five bathrooms, this villa offers the epitome of contemporary luxury living. The open-concept living area boasts floor-to-ceiling windows, bathing the space in natural light and offering panoramic views.',
                3000000,
                'apartment',
                4,
                3,
                220,
                ARRAY['https://res.cloudinary.com/dt3xadu3e/image/upload/v1738840019/appartment_ua0eqs.png', 'https://res.cloudinary.com/dt3xadu3e/image/upload/v1738842919/inside_oxy4s0.png']
            );
        `);


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("apartments");
    }
}

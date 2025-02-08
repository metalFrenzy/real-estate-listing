export interface ApartmentResponse {
    id: number;
    title: string;
    area: string;
    developer: string;
    description: string;
    price: number;
    type: string;
    bedrooms: number;
    bathrooms: number;
    size: number;
    image_urls: string[];
}
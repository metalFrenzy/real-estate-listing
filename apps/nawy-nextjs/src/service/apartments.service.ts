import axios from "axios";
import { ApartmentRequest } from "@/viewmodels/request/apartment.request";
import { ApartmentResponse } from "@/viewmodels/response/apartments.viewmodel";


const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Fetches a list of apartments from the API.
 * @returns {Promise<ApartmentResponse[]>} A promise that resolves to an array of ApartmentResponse objects.
 */
export const getApartments = async ():Promise<ApartmentResponse[]> => {
    const response = await axios.get<ApartmentResponse[]>(`${BASE_URL}/apartments`);
    return response.data;
}

/**
 * Fetches a single apartment by its ID from the API.
 * @param {number} id - The ID of the apartment to fetch.
 * @returns {Promise<ApartmentResponse>} A promise that resolves to an ApartmentResponse object.
 */
export const getApartmentById = async (id: number):Promise<ApartmentResponse> => {
    const response = await axios.get<ApartmentResponse>(`${BASE_URL}/apartments/${id}`);
    return response.data;
}

/**
 * Creates a new apartment in the API.
 * @param {ApartmentRequest} apartment - The apartment data to create.
 * @returns {Promise<ApartmentResponse>} A promise that resolves to the created ApartmentResponse object.
 */
export const createApartment = async (
    apartment: ApartmentRequest
  ): Promise<ApartmentResponse> => {
    const response = await axios.post(`${BASE_URL}/apartments`, apartment);
    return response.data;
  };
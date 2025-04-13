import Image from 'next/image';
import './apartments-card.scss';
import { useRouter } from "next/router";
import { ApartmentDtoResponse } from "@/viewmodels/response/apartments.dto.viewmodel";

interface ApartmentsCardProps {
    apartment: ApartmentDtoResponse;
}

const ApartmentsCard: React.FC<ApartmentsCardProps> = ({ apartment }) => {
    const { image_urls, type, title, area, bedrooms, bathrooms, size, price } = apartment;
    const imageUrl = image_urls[0];
    const formattedPrice = Math.floor(price);
    const router = useRouter();

    const handleViewDetails = () => {
        router.push(`/apartments/${apartment.id}`);
    }

    return (
        <div className="apartment-card">
            <Image src={imageUrl} alt="Apartment" layout="responsive" width={1000} height={700} />
            <div className="apartment-details">
                <h2 className="title-type">{`${type}-${title}`}</h2>
                <p>Area: {area}</p>
                <div className="apartment-info">
                    <span>Bedrooms: {bedrooms}</span>
                    <span>Bathrooms: {bathrooms}</span>
                    <span>Size: {size} sqm</span>
                </div>
                <div className="price-button">
                    <p className="price"> {formattedPrice} LE</p>
                    <button className="view-details" onClick={handleViewDetails}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ApartmentsCard;


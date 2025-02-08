import { useState } from "react";
import Image from 'next/image';
import './image-slider.scss';


interface ImageSliderProps {
    imageUrls: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imageUrls }) => {
    const [imageIndex, setImageIndex] = useState(0);
    const handleNext = () => {
        setImageIndex((imageIndex + 1) % imageUrls.length);
    };
    const handlePerivous = () => {
        setImageIndex((imageIndex - 1 + imageUrls.length) % imageUrls.length);
    }
    return (
        <div className="image-slider">
            <Image src={imageUrls[imageIndex]} alt="Apartment" layout="responsive" width={300} height={100} />
            <div className="controls">
                <button onClick={handlePerivous}></button>
                <button onClick={handleNext}></button>
            </div>
        </div>
    );
}

export default ImageSlider;


import ImageSlider from '@/components/image-slider/image-slider';
import { getApartmentById } from '@/service/apartments.service';
import { ApartmentResponse } from '@/viewmodels/response/apartments.viewmodel';
import { GetServerSideProps } from 'next';
import './details.scss'

interface DetailPageProps {
  apartment: ApartmentResponse;
}

const DetailPage: React.FC<DetailPageProps> = ({ apartment }) => {
  const { image_urls, title, area, bedrooms, bathrooms, size, price, description } = apartment;
  return (
    <div className='details-page'>
      <ImageSlider imageUrls={image_urls} />
      <div className='title-area'>
        <h2 className='title'>{title}</h2>
        <div className='area'>{area}</div>
        <p className='price'>{price} LE</p>
      </div>
      <p className='description'>{description}</p>
      <div className='feats'>
        <div className='bedrooms'>{bedrooms} Bedrooms</div>
        <div className='bathrooms'>{bathrooms} Bathrooms</div>
        <div className='size'>{size} sqm</div>
      </div>
    </div>
  )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const apartment = await getApartmentById(Number(id));
  return { props: { apartment } };
};

export default DetailPage;
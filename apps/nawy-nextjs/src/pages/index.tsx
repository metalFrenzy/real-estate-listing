import { GetServerSideProps } from "next";
import { getApartments } from "@/service/apartments.service";
import CoverPage from "@/components/cover/cover-page";
import '../styles/index.scss';
import ApartmentsCard from "@/components/apartments-card/apartments-card";
import { ApartmentDtoResponse } from "@/viewmodels/response/apartments.dto.viewmodel";



interface HomePageProps {
    apartments: ApartmentDtoResponse[];
}

const HomePage: React.FC<HomePageProps> = ({ apartments }) => {
    return (
        <div>
            <CoverPage />
            <h1 className="heading">Apartment Listings</h1>
            <div className="apartments-list">
                {apartments.map((apartment) => (
                    <ApartmentsCard apartment={apartment} key={apartment.id} />
                ))}
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const apartments = await getApartments();
    return { props: { apartments } };
};

export default HomePage;

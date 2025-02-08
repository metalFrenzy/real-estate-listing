import './cover-page.scss';

const CoverPage: React.FC = () => {
    return (
        <div className="cover-page">
            <div className="text-overlay">
                <h1 className="title">Discover Your Dream Property <span>with Nawy</span></h1>
                <p className="subtitle">
                    Unlock the door to your perfect home with Nawy. <span>Explore our listings to find the home that matches your dreams.</span>
                </p>
            </div>
        </div>
    );
};

export default CoverPage;

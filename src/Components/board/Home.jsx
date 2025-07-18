import products from '../../data/products.js';
import PageHeading from "./PageHeading";
import './board.css';
import ProductListings from './products/ProductListings.jsx';

const Home = () => {
    return (
        <div className="home-container">
            <PageHeading title="Explore Stickers!">
                Add a touch of creativity to your space with our wide range of fun and
                unique stickers. Perfect for any occasion!
            </PageHeading>
            <ProductListings products={products} />
        </div>
    );
};

export default Home;
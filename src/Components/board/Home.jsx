import products from '../../data/products.js';
import PageHeading from "./PageHeading";
import ProductListings from './products/ProductListings.jsx';

export default function Home() {
  return (
    <div className="max-w-[1152px] mx-auto px-6 py-8">
      <PageHeading title="Explore Stickers Store!">
        Add a touch of creativity to your space with our wide range of fun and
        unique stickers. Perfect for any occasion!
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}
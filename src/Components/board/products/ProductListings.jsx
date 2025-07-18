import ProductCard from './ProductCard.jsx';

const ProductListings = ({products}) => {
 return (
 <div className="product-listings-container">
    <div className="product-listings-grid">
        {products.length > 0 ? (
            products.map((product) => (<ProductCard key={products.productId} product={product}/>))
        ) : (
          <p className="product-listings-empty">No products found</p>
        )}
    </div>
 </div>);
};

export default ProductListings;
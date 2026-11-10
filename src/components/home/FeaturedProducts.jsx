
import { Link } from "react-router-dom";
import products from "../../data/products";
import ProductCard from "../common/ProductCard";
import "./FeaturedProducts.css";

function FeaturedProducts() {
  return (
    <section className="featured-products-section">
      <div className="featured-products-container">

        <div className="featured-products-heading">
          <div>
            <span className="section-eyebrow">
              HANDPICKED FOR YOU
            </span>

            <h2>
              Designs worth
              <span> remembering.</span>
            </h2>

            <p>
              Explore some of our favourite invitation designs,
              thoughtfully created for your special occasions.
            </p>
          </div>

          <Link to="/gallery" className="featured-view-all">
            View All Designs <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="featured-products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;

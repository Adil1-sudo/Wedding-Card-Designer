
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link
        to={`/product/${product.id}`}
        className="product-image-link"
        aria-label={`View ${product.name}`}
      >
        <div className="product-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            // loading="lazy"
          />

          <span className="product-view-label">
            VIEW DESIGN
          </span>
        </div>
      </Link>

      <div className="product-card-info">
        <div>
          <span className="product-category">
            {product.category}
          </span>

          <h3>{product.name}</h3>

          <p className="product-price">
            Starting from <strong>Rs. {product.price}</strong>
          </p>
        </div>

        <Link
          to={`/product/${product.id}`}
          className="product-details-link"
        >
          View Details <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;

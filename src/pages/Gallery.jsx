
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/common/ProductCard";
import products from "../data/products";
import "./Gallery.css";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Generate categories automatically from product data.
  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(products.map((product) => product.category)),
    ];
  }, []);

  // Filter products according to the selected category.
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  return (
    <main className="gallery-page">
      {/* Page Introduction */}
      <section className="gallery-hero">
        <div className="container">
          <span className="gallery-eyebrow">
            OUR COLLECTION
          </span>

          <h1>
            Designs Made for
            <span> Your Special Moments</span>
          </h1>

          <p>
            Explore our collection of thoughtfully designed
            invitations for weddings, engagements and every
            celebration worth remembering.
          </p>

          <div className="gallery-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Gallery</span>
          </div>
        </div>
      </section>

      {/* Product Collection */}
      <section className="gallery-collection section-padding">
        <div className="container">
          <div className="gallery-heading">
            <div>
              <span className="section-eyebrow">
                FIND YOUR PERFECT DESIGN
              </span>

              <h2>Our Invitation Collection</h2>
            </div>

            <p>
              {filteredProducts.length} designs available
            </p>
          </div>

          {/* Category Filters */}
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "gallery-filter active"
                    : "gallery-filter"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="gallery-product-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="gallery-empty">
              <h3>No designs found</h3>
              <p>Please select another category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Gallery;

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/products";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();

  const product = products.find(
    (item) => item.id === productId
  );

  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    quantity: "100",
    instructions: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Backend integration will be added later.
    console.log("Product order request:", {
      productId: product.id,
      productName: product.name,
      ...formData,
    });

    setSubmitted(true);

    setFormData({
      customerName: "",
      phone: "",
      quantity: "100",
      instructions: "",
    });
  };

  if (!product) {
    return (
      <main className="product-not-found">
        <div className="container">
          <span>404</span>
          <h1>Design Not Found</h1>
          <p>
            Sorry, the invitation design you're looking
            for could not be found.
          </p>

          <Link to="/gallery">
            Explore Our Collection
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="product-details-page">

      {/* Breadcrumb */}
      <div className="product-breadcrumb-wrapper">
        <div className="container product-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/gallery">Gallery</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <section className="product-details-section">
        <div className="container">
          <div className="product-details-layout">

            {/* Product Image */}
            <div className="product-details-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            {/* Product Information */}
            <div className="product-details-info">
              <span className="product-details-category">
                {product.category}
              </span>

              <h1>{product.name}</h1>

              <div className="product-details-price">
                <span>Starting from</span>
                <strong>Rs. {product.price}</strong>
              </div>

              <p className="product-details-description">
                {product.description}
              </p>

              <div className="product-details-divider" />

              <div className="product-details-note">
                <span>✦</span>
                <p>
                  Personalize this design according to your
                  occasion, preferred wording and requirements.
                </p>
              </div>

              <div className="product-details-divider" />

              {/* Order Request Form */}
              <div className="product-order-wrapper">
                <h2>Request This Design</h2>

                <p className="product-order-description">
                  Share your details and we'll contact you
                  to discuss your order.
                </p>

                {submitted && (
                  <div className="product-order-success">
                    Your request has been received in this
                    demo. Backend submission will be
                    connected later.
                  </div>
                )}

                <form
                  className="product-order-form"
                  onSubmit={handleSubmit}
                >
                  <div className="product-order-field">
                    <label htmlFor="customerName">
                      Full Name *
                    </label>

                    <input
                      id="customerName"
                      type="text"
                      name="customerName"
                      placeholder="Enter your full name"
                      value={formData.customerName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="product-order-field">
                    <label htmlFor="phone">
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+92 3XX XXXXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="product-order-field">
                    <label htmlFor="quantity">
                      Required Quantity *
                    </label>

                    <input
                      id="quantity"
                      type="number"
                      name="quantity"
                      min="1"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="product-order-field">
                    <label htmlFor="instructions">
                      Additional Instructions
                    </label>

                    <textarea
                      id="instructions"
                      name="instructions"
                      rows="4"
                      placeholder="Tell us about your preferred colors, wording or other requirements..."
                      value={formData.instructions}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="product-order-submit"
                  >
                    Submit Order Request
                    <span>→</span>
                  </button>

                  <p className="product-order-footnote">
                    Submitting this form does not confirm
                    your order. We'll contact you first.
                  </p>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ProductDetails;

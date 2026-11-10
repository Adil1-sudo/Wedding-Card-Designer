import { Link } from "react-router-dom";
import products from "../../data/products";
import "./GalleryPreview.css";

const GalleryPreview = () => {
  const galleryItems = products.slice(0, 4);

  return (
    <section className="gallery-preview section-padding">
      <div className="container">
        <div className="gallery-preview-heading">
          <div>
            <span className="section-eyebrow">
              OUR CREATIVE COLLECTION
            </span>

            <h2>
              A Glimpse of Our
              <span> Beautiful Creations</span>
            </h2>

            <p>
              Explore a selection of invitations designed
              to make every celebration special.
            </p>
          </div>

          <Link to="/gallery" className="gallery-view-all">
            Explore Full Gallery
            <span>→</span>
          </Link>
        </div>

        <div className="gallery-preview-grid">
          {galleryItems.map((item, index) => (
            <Link
              to={`/product/${item.id}`}
              className={`gallery-preview-item gallery-item-${index + 1}`}
              key={item.id}
            >
              <div className="gallery-preview-image">
                <img src={item.image} alt={item.name} />

                <div className="gallery-preview-overlay">
                  <span>View Design</span>
                  <span className="gallery-arrow">↗</span>
                </div>
              </div>

              <div className="gallery-preview-info">
                <span>{item.category}</span>
                <h3>{item.name}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="gallery-mobile-link">
          <Link to="/gallery">
            View All Designs →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;

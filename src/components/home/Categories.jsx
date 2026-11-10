
import { Link } from "react-router-dom";
import "./Categories.css";

import weddingImage from "../../assets/images/wedding-category.webp";
import engagementImage from "../../assets/images/engagement-category.webp";
import birthdayImage from "../../assets/images/birthday-category.webp";
import eventImage from "../../assets/images/event-category.webp";

const categories = [
  {
    id: 1,
    title: "Wedding Invitations",
    subtitle: "For your forever beginning",
    image: weddingImage,
  },
  {
    id: 2,
    title: "Engagement Invitations",
    subtitle: "Celebrate the beginning of love",
    image: engagementImage,
  },
  {
    id: 3,
    title: "Birthday Invitations",
    subtitle: "Make every birthday special",
    image: birthdayImage,
  },
  {
    id: 4,
    title: "Event Invitations",
    subtitle: "Invitations for every occasion",
    image: eventImage,
  },
];

function Categories() {
  return (
    <section className="categories-section">
      <div className="categories-container">

        <div className="categories-heading">
          <span className="section-eyebrow">
            EXPLORE OUR COLLECTION
          </span>

          <h2>
            Invitations for every
            <span> special moment.</span>
          </h2>

          <p>
            From timeless wedding stationery to joyful celebrations,
            discover designs made to make every occasion memorable.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              to="/gallery"
              className="category-card"
              key={category.id}
            >
              <div className="category-image-wrapper">
                <img
                  src={category.image}
                  alt={category.title}
                  className="category-image"
                  loading="lazy"
                />

                <span className="category-explore">
                  EXPLORE COLLECTION
                </span>
              </div>

              <div className="category-info">
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.subtitle}</p>
                </div>

                <span className="category-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;

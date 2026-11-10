
import { Link } from "react-router-dom";
import "./Hero.css";
import heroImage from "../../assets/images/hero-invitation.webp";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">

        <div className="hero-content">
          <span className="hero-eyebrow">
            CRAFTED WITH LOVE & ELEGANCE
          </span>

          <h1>
            Invitations that make
            <span> every celebration </span>
            unforgettable.
          </h1>

          <p>
            Beautifully designed invitations and thoughtfully
            crafted details for life's most meaningful moments.
          </p>

          <div className="hero-actions">
            <Link to="/gallery" className="hero-primary-button">
              Explore Collection
            </Link>

            <Link to="/contact" className="hero-secondary-button">
              Contact Us
            </Link>
          </div>

          <div className="hero-note">
            <span className="hero-note-line"></span>
            <span>DESIGNED TO MAKE MEMORIES LAST</span>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src={heroImage}
            alt="Elegant wedding invitation stationery"
            className="hero-image"
          />

          <div className="hero-image-caption">
            <span>THE ART OF INVITATION</span>
            <span>01 — OUR COLLECTION</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;

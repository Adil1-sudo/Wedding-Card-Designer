
import React from "react";
import { Link } from "react-router-dom";
import "./ContactCTA.css";

const ContactCTA = () => {
  return (
    <section className="contact-cta">
      <div className="contact-cta-decoration contact-cta-decoration-one">
        ✦
      </div>

      <div className="contact-cta-decoration contact-cta-decoration-two">
        ✧
      </div>

      <div className="container contact-cta-content">
        <span className="contact-cta-eyebrow">
          LET'S CREATE SOMETHING BEAUTIFUL
        </span>

        <h2>
          Your Special Moments
          <span>Deserve a Beautiful Beginning.</span>
        </h2>

        <p>
          From elegant wedding invitations to personalized
          celebration cards, let's create something that
          makes your occasion truly memorable.
        </p>

        <div className="contact-cta-actions">
          <Link to="/contact" className="contact-cta-primary">
            Get in Touch
            <span>→</span>
          </Link>

          <Link to="/gallery" className="contact-cta-secondary">
            Explore Designs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;


import React from "react";
import { Link } from "react-router-dom";
import "./AboutStudio.css";

import aboutImage from "../../assets/images/about-studio.webp";

const AboutStudio = () => {
  return (
    <section className="about-studio section-padding">
      <div className="about-studio-container container">
        <div className="about-studio-image">
          <img
            src={aboutImage}
            alt="Beautiful wedding invitation stationery"
          />

          <div className="about-image-caption">
            <span>Thoughtfully Designed</span>
            <span>Beautifully Printed</span>
          </div>
        </div>

        <div className="about-studio-content">
          <span className="section-eyebrow">
            A LITTLE ABOUT US
          </span>

          <h2>
            Every Invitation Has a
            <span> Story to Tell</span>
          </h2>

          <p className="about-intro">
            We believe an invitation is more than just a
            piece of paper. It is the first impression of
            a beautiful celebration and a reflection of
            your special moments.
          </p>

          <p className="about-description">
            At The Invitation Studio, we bring creativity
            and attention to detail together to create
            elegant wedding invitations, engagement cards,
            birthday invitations and custom designs.
            Every design is thoughtfully prepared to make
            your celebrations even more memorable.
          </p>

          <div className="about-studio-features">
            <div className="about-feature">
              <span className="feature-number">01</span>
              <div>
                <h4>Creative Designs</h4>
                <p>Designs that reflect your personality.</p>
              </div>
            </div>

            <div className="about-feature">
              <span className="feature-number">02</span>
              <div>
                <h4>Attention to Detail</h4>
                <p>Care in every detail of your invitation.</p>
              </div>
            </div>
          </div>

          <Link to="/about" className="about-studio-button">
            Discover Our Story
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutStudio;

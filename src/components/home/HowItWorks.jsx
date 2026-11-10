
import React from "react";
import { Link } from "react-router-dom";
import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Explore Designs",
    description:
      "Browse our collection of wedding, engagement, birthday and event invitations.",
  },
  {
    number: "02",
    title: "Choose Your Invitation",
    description:
      "Find a design that matches your celebration and personal preferences.",
  },
  {
    number: "03",
    title: "Submit Your Request",
    description:
      "Share your contact details, required quantity and any special instructions.",
  },
  {
    number: "04",
    title: "Confirm Your Order",
    description:
      "We'll contact you to discuss the details and confirm your order personally.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works section-padding">
      <div className="container">
        <div className="how-it-works-heading">
          <span className="section-eyebrow">
            SIMPLE AND PERSONAL
          </span>

          <h2>
            From Inspiration to
            <span> Invitation</span>
          </h2>

          <p>
            Getting your invitations is simple. Follow
            four easy steps to get started.
          </p>
        </div>

        <div className="how-it-works-grid">
          {steps.map((step, index) => (
            <div className="how-step" key={step.number}>
              <div className="how-step-top">
                <span className="how-step-number">
                  {step.number}
                </span>

                {index !== steps.length - 1 && (
                  <span className="how-step-connector"></span>
                )}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <div className="how-it-works-cta">
          <p>Found a design you love?</p>

          <Link to="/gallery">
            Explore Our Collection
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

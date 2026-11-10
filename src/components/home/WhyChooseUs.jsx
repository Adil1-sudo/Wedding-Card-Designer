
import React from "react";
import "./WhyChooseUs.css";

const features = [
  {
    symbol: "✦",
    title: "Creative Designs",
    description:
      "Discover elegant and thoughtful invitation designs for every special occasion.",
  },
  {
    symbol: "◇",
    title: "Quality Printing",
    description:
      "Beautiful presentation and careful attention to the details that matter.",
  },
  {
    symbol: "✧",
    title: "Made for You",
    description:
      "Choose designs and details that reflect your personal style and celebration.",
  },
  {
    symbol: "♡",
    title: "Personal Attention",
    description:
      "We listen to your ideas and help you find the right invitation for your event.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us section-padding">
      <div className="container">
        <div className="why-choose-heading">
          <span className="section-eyebrow">
            THE DIFFERENCE WE MAKE
          </span>

          <h2>
            Special Details.
            <span> Beautiful Impressions.</span>
          </h2>

          <p>
            Because your special moments deserve invitations
            that feel just as memorable as the celebration itself.
          </p>
        </div>

        <div className="why-choose-grid">
          {features.map((feature, index) => (
            <div className="why-choose-card" key={feature.title}>
              <div className="why-choose-symbol">
                {feature.symbol}
              </div>

              <span className="why-choose-number">
                0{index + 1}
              </span>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <div className="why-choose-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import storyImage from "../assets/images/about-story.webp";

const values = [
  {
    number: "01",
    title: "Creative Designs",
    description:
      "We believe every celebration deserves a design that reflects its personality and meaning.",
  },
  {
    number: "02",
    title: "Attention to Detail",
    description:
      "From typography to colors and finishing touches, every detail contributes to a beautiful invitation.",
  },
  {
    number: "03",
    title: "Personalization",
    description:
      "We welcome your ideas and preferences to help create invitations that feel uniquely yours.",
  },
  {
    number: "04",
    title: "Quality First",
    description:
      "We focus on thoughtful design and quality printing to make every invitation special.",
  },
];

const strengths = [
  "A variety of invitation styles and designs",
  "Options for different celebrations and occasions",
  "Personalized design discussions",
  "Direct communication throughout the ordering process",
];

const About = () => {
  return (
    <main className="about-page">

      {/* Page Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span>GET TO KNOW US</span>

          <h1>
            Behind Every Beautiful
            <span>Invitation Is a Story.</span>
          </h1>

          <p>
            We believe an invitation is more than just a
            piece of paper. It's the beginning of a
            celebration worth remembering.
          </p>

          <Link to="/gallery" className="about-hero-link">
            Explore Our Designs <span>→</span>
          </Link>
        </div>

        <div className="about-hero-decoration">
          ✦
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story section-padding">
        <div className="container about-story-grid">

          <div className="about-story-image">
            <img
              src={storyImage}
              alt="Elegant cream and gold wedding invitation stationery"
            />

            <div className="about-image-caption">
              <span>THE ART OF INVITATION</span>
            </div>
          </div>

          <div className="about-story-content">
            <span className="about-eyebrow">
              OUR STORY
            </span>

            <h2>
              Creating Invitations
              <span>With Meaning and Elegance.</span>
            </h2>

            <p>
              Every special occasion begins with an
              invitation. It introduces the celebration,
              creates excitement and gives guests a
              glimpse of the moments waiting ahead.
            </p>

            <p>
              Our studio brings together creativity,
              thoughtful details and beautiful stationery
              to help make those first impressions memorable.
              From wedding celebrations to birthdays and
              special events, we offer designs that suit
              different styles and preferences.
            </p>

            <p>
              Whether you prefer something traditional,
              modern, minimal or luxurious, we're here to
              help you explore the possibilities.
            </p>

            <Link to="/contact" className="about-text-link">
              Let's Discuss Your Ideas <span>→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Our Values */}
      <section className="about-values section-padding">
        <div className="container">

          <div className="about-section-heading">
            <span className="about-eyebrow">
              WHAT MATTERS TO US
            </span>

            <h2>
              The Values Behind
              <span>Our Work</span>
            </h2>

            <p>
              The principles that guide the way we
              approach every invitation and celebration.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => (
              <article
                className="about-value-card"
                key={value.number}
              >
                <span className="about-value-number">
                  {value.number}
                </span>

                <div className="about-value-line"></div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why section-padding">
        <div className="container about-why-grid">

          <div className="about-why-heading">
            <span className="about-eyebrow">
              THE DIFFERENCE
            </span>

            <h2>
              A Thoughtful Approach
              <span>To Every Celebration.</span>
            </h2>

            <p>
              Choosing an invitation is personal.
              We want the experience of finding the
              right design to feel simple and enjoyable.
            </p>

            <Link to="/gallery" className="about-text-link">
              View Our Collection <span>→</span>
            </Link>
          </div>

          <div className="about-why-list">
            {strengths.map((strength, index) => (
              <div className="about-why-item" key={strength}>
                <span>0{index + 1}</span>
                <p>{strength}</p>
                <span className="about-check">✦</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact CTA */}
      <section className="about-bottom-cta">
        <div className="container">
          <span>YOUR CELEBRATION, YOUR STYLE</span>

          <h2>
            Let's Create Something
            <span>Worth Remembering.</span>
          </h2>

          <p>
            Have an idea for your special occasion?
            We'd love to hear about it.
          </p>

          <Link to="/contact">
            Start a Conversation <span>→</span>
          </Link>
        </div>
      </section>

    </main>
  );
};

export default About;

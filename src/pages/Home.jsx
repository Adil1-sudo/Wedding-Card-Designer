import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-invitation.webp";
import weddingImage from "../assets/images/wedding-category.webp";
import engagementImage from "../assets/images/engagement-category.webp";
import birthdayImage from "../assets/images/birthday-category.webp";
import eventImage from "../assets/images/event-category.webp";
import products from "../data/products";
import ProductCard from "../components/common/ProductCard";
import aboutImage from "../assets/images/about-studio.webp";
import "./Home.css";
import { useState } from "react";

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

const testimonials = [
  {
    name: "Ayesha Khan",
    event: "Wedding Invitations",
    message:
      "The invitation design was exactly what I had imagined. The details and overall presentation made it feel truly special.",
  },
  {
    name: "Fatima Ahmed",
    event: "Engagement Invitations",
    message:
      "I loved how beautifully everything came together. The design was elegant, and the team was helpful throughout the process.",
  },
  {
    name: "Hamza Malik",
    event: "Birthday Invitations",
    message:
      "The invitation looked wonderful and suited our celebration perfectly. I really appreciated the attention to detail.",
  },
];

const faqs = [
  {
    question: "Can I customize an invitation design?",
    answer:
      "Yes. You can discuss your preferred colors, wording, names and other design details with us.",
  },
  {
    question: "How can I place an order?",
    answer:
      "Explore our designs, open the product you like and submit the order request form. We'll contact you to discuss and confirm the details.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "Minimum quantities can vary depending on the design and printing requirements. Contact us with your requirements for details.",
  },
  {
    question: "How long does printing take?",
    answer:
      "Production time depends on the design, quantity and printing requirements. We'll discuss the estimated time when confirming your order.",
  },
  {
    question: "Can I see a sample before ordering?",
    answer:
      "Contact us to discuss sample availability and the options available for your selected design.",
  },
];

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryItems = products.slice(0, 4);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
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
                //   loading="lazy"
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

    <section className="featured-products-section">
      <div className="featured-products-container">

        <div className="featured-products-heading">
          <div>
            <span className="section-eyebrow">
              HANDPICKED FOR YOU
            </span>

            <h2>
              Designs worth
              <span> remembering.</span>
            </h2>

            <p>
              Explore some of our favourite invitation designs,
              thoughtfully created for your special occasions.
            </p>
          </div>

          <Link to="/gallery" className="featured-view-all">
            View All Designs <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="featured-products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>

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

    <section className="testimonials section-padding">
      <div className="container">
        <div className="testimonials-heading">
          <span className="section-eyebrow">
            KIND WORDS
          </span>

          <h2>
            Moments Made Special,
            <span> Memories Shared</span>
          </h2>

          <p>
            Every celebration is unique. We love being
            part of the little details that make it memorable.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article
              className="testimonial-card"
              key={testimonial.name}
            >
              <div className="testimonial-quote">“</div>

              <div className="testimonial-stars" aria-label="Five stars">
                ★★★★★
              </div>

              <p className="testimonial-message">
                {testimonial.message}
              </p>

              <div className="testimonial-divider"></div>

              <div className="testimonial-customer">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.event}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="faq-preview section-padding">
      <div className="container">
        <div className="faq-preview-layout">
          <div className="faq-preview-intro">
            <span className="section-eyebrow">
              NEED SOME ANSWERS?
            </span>

            <h2>
              Frequently Asked
              <span> Questions</span>
            </h2>

            <p>
              Have questions about our invitations,
              customization or ordering process?
              We've answered some common questions to help you.
            </p>

            <Link to="/faqs" className="faq-all-link">
              Explore All FAQs
              <span>→</span>
            </Link>
          </div>

          <div className="faq-preview-list">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  className={`faq-preview-item ${
                    isOpen ? "faq-open" : ""
                  }`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>

                    <span className="faq-toggle">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className="faq-answer"
                    hidden={!isOpen}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

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
    </>
  );
}

export default Home;

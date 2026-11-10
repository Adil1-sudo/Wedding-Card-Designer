
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FAQPreview.css";

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

const FAQPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
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
  );
};

export default FAQPreview;

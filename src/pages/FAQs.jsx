
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FAQs.css";

const faqCategories = [
  {
    title: "Design & Customization",
    questions: [
      {
        question: "Can I customize an invitation design?",
        answer:
          "Yes. You can discuss your preferred colors, wording, names, fonts and other design details with us.",
      },
      {
        question: "Can I request a completely new design?",
        answer:
          "You can contact us with your ideas and requirements. We'll discuss whether a custom design can be created for your occasion.",
      },
      {
        question: "Can I change the wording on an existing design?",
        answer:
          "Yes. Names, event details, invitation wording and other suitable text elements can be discussed before printing.",
      },
    ],
  },
  {
    title: "Ordering & Payments",
    questions: [
      {
        question: "How can I place an order?",
        answer:
          "Browse our collection, select a design and submit the order request form. We'll contact you to discuss your requirements and confirm the order.",
      },
      {
        question: "Does submitting an order request confirm my order?",
        answer:
          "No. Submitting a request is only the first step. Your order becomes confirmed after we contact you and mutually agree on the details.",
      },
      {
        question: "How can I get the final price?",
        answer:
          "The price depends on the design, quantity, paper and printing requirements. Contact us for a price based on your needs.",
      },
    ],
  },
  {
    title: "Printing & Delivery",
    questions: [
      {
        question: "What is the minimum order quantity?",
        answer:
          "Minimum quantities may vary depending on the selected design and printing requirements. Contact us to discuss your quantity.",
      },
      {
        question: "How long does printing take?",
        answer:
          "Production time depends on the design, quantity and printing requirements. We'll provide an estimated timeframe when discussing your order.",
      },
      {
        question: "Do you offer delivery?",
        answer:
          "Please contact us to discuss delivery availability, locations and any applicable delivery charges.",
      },
    ],
  },
];

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(0);

  const selectedCategory = faqCategories[activeCategory];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const changeCategory = (index) => {
    setActiveCategory(index);
    setOpenQuestion(0);
  };

  return (
    <main className="faqs-page">
      {/* Page Hero */}
      <section className="faqs-hero">
        <div className="container">
          <span className="faqs-eyebrow">
            WE'RE HERE TO HELP
          </span>

          <h1>
            Frequently Asked
            <span> Questions</span>
          </h1>

          <p>
            Find answers to common questions about our
            invitation designs, customization, ordering
            and printing services.
          </p>

          <div className="faqs-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>FAQs</span>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faqs-content section-padding">
        <div className="container">
          <div className="faqs-layout">

            {/* Category Navigation */}
            <aside className="faqs-sidebar">
              <span className="faqs-sidebar-label">
                BROWSE BY TOPIC
              </span>

              <div className="faqs-category-list">
                {faqCategories.map((category, index) => (
                  <button
                    key={category.title}
                    type="button"
                    className={
                      activeCategory === index
                        ? "faqs-category active"
                        : "faqs-category"
                    }
                    onClick={() => changeCategory(index)}
                  >
                    {category.title}
                    <span>→</span>
                  </button>
                ))}
              </div>
            </aside>

            {/* Questions */}
            <div className="faqs-main">
              <div className="faqs-category-heading">
                <span>YOUR QUESTIONS ANSWERED</span>
                <h2>{selectedCategory.title}</h2>
              </div>

              <div className="faqs-accordion">
                {selectedCategory.questions.map(
                  (faq, index) => {
                    const isOpen = openQuestion === index;

                    return (
                      <div
                        className={`faqs-item ${
                          isOpen ? "faqs-item-open" : ""
                        }`}
                        key={faq.question}
                      >
                        <button
                          type="button"
                          className="faqs-question"
                          onClick={() => toggleQuestion(index)}
                          aria-expanded={isOpen}
                        >
                          <span>{faq.question}</span>
                          <span className="faqs-icon">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>

                        <div
                          className="faqs-answer"
                          hidden={!isOpen}
                        >
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>

              <div className="faqs-help-box">
                <div>
                  <h3>Still have questions?</h3>
                  <p>
                    We're happy to discuss your requirements
                    and help you find the right invitation.
                  </p>
                </div>

                <Link to="/contact">
                  Contact Us <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQs;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Backend integration will be added later.
    console.log("Contact inquiry:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">

      {/* Page Hero */}
      <section className="contact-hero">
        <div className="container">
          <span className="contact-eyebrow">
            WE'D LOVE TO HEAR FROM YOU
          </span>

          <h1>
            Let's Talk About
            <span> Your Special Occasion</span>
          </h1>

          <p>
            Have a question, a design idea or need help
            choosing an invitation? Get in touch with us.
          </p>

          <div className="contact-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="contact-main section-padding">
        <div className="container">
          <div className="contact-layout">

            {/* Contact Information */}
            <aside className="contact-info">
              <span className="contact-info-eyebrow">
                GET IN TOUCH
              </span>

              <h2>
                Let's Create Something
                <span>Beautiful Together.</span>
              </h2>

              <p className="contact-info-description">
                Whether you need a custom wedding invitation
                or have questions about our collection,
                we're here to help.
              </p>

              <div className="contact-info-items">

                <div className="contact-info-item">
                  <div className="contact-info-icon">☎</div>

                  <div>
                    <span>PHONE NUMBER</span>
                    <p>+92 300 0000000</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">✉</div>

                  <div>
                    <span>EMAIL ADDRESS</span>
                    <p>hello@example.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">⌖</div>

                  <div>
                    <span>BUSINESS LOCATION</span>
                    <p>Your City, Pakistan</p>
                  </div>
                </div>

              </div>

              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp"
              >
                Chat with us on WhatsApp
                <span>→</span>
              </a>
            </aside>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="contact-form-heading">
                <span>SEND US A MESSAGE</span>
                <h2>How Can We Help You?</h2>
                <p>
                  Fill in the form below and tell us about
                  your inquiry.
                </p>
              </div>

              {submitted && (
                <div className="contact-success">
                  Your message has been received in this demo.
                  Backend submission will be connected later.
                </div>
              )}

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">
                      Full Name *
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">
                      Email Address *
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-phone">
                      Phone Number *
                    </label>

                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="+92 3XX XXXXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-subject">
                      Subject *
                    </label>

                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select an inquiry
                      </option>
                      <option value="Wedding Invitation">
                        Wedding Invitation
                      </option>
                      <option value="Custom Design">
                        Custom Design
                      </option>
                      <option value="Printing Inquiry">
                        Printing Inquiry
                      </option>
                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">
                    Your Message *
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit-button"
                >
                  Send Message
                  <span>→</span>
                </button>

                <p className="contact-form-note">
                  * Required fields
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;

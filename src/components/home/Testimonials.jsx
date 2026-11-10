
import React from "react";
import "./Testimonials.css";

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

const Testimonials = () => {
  return (
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
  );
};

export default Testimonials;

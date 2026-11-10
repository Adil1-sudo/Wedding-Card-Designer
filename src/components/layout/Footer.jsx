
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-container">

          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-brand-mark">I</span>
              <span>The Invitation Studio</span>
            </Link>

            <p>
              Creating thoughtfully designed invitations and beautiful
              printed details for life's most memorable celebrations.
            </p>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/gallery">Our Gallery</Link>
            <Link to="/faqs">FAQs</Link>
          </div>

          <div className="footer-column">
            <h3>Get in Touch</h3>
            <Link to="/contact">Contact Us</Link>
            <Link to="/gallery">Explore Designs</Link>
            <Link to="/contact">Place an Enquiry</Link>
          </div>

          <div className="footer-column footer-contact">
            <h3>Our Studio</h3>
            <p>Location: Your City, Pakistan</p>
            <p>For orders and enquiries, contact our studio.</p>
            <Link to="/contact" className="footer-contact-link">
              Contact Our Team
            </Link>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            © {new Date().getFullYear()} The Invitation Studio.
            All rights reserved.
          </p>

          <p>Designed with care for your special moments.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

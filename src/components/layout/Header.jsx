
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "FAQs", path: "/faqs" },
  { label: "Contact", path: "/contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="announcement-bar">
        <p>Thoughtfully designed invitations for your special moments</p>
      </div>

      <div className="header-main">
        <div className="header-container">
          <Link to="/" className="brand-logo" onClick={closeMenu}>
            <span className="brand-mark">I</span>

            <span className="brand-name">
              The Invitation Studio
              <small>DESIGN · PRINT · CELEBRATE</small>
            </span>
          </Link>

          <button
            className={`mobile-menu-toggle ${menuOpen ? "active" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`main-navigation ${menuOpen ? "open" : ""}`}>
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="header-cta"
              onClick={closeMenu}
            >
              Enquire Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

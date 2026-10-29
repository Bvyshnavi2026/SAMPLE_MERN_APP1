import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="container py-4">
        <div className="row align-items-center gy-4">

          {/* Brand section */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <Link to="/" className="footer-brand">
              <i className="bi bi-grid-1x2-fill me-2"></i>
              Work<span>Flow</span>
            </Link>

            <p className="footer-description mt-2 mb-0">
              Simplifying teamwork, one task at a time.
            </p>
          </div>

          {/* Quick links */}
          <div className="col-12 col-md-4">
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/service">Services</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Social icons */}
          <div className="col-12 col-md-4">
            <div className="footer-social">
              <a href="https://github.com/" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>

              <a href="https://www.linkedin.com/" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="mailto:">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="mb-0">
            © 2026 <strong>Vyshnavi</strong>. All rights reserved.
          </p>

          <p className="mb-0 footer-made">
            Made with <i className="bi bi-heart-fill"></i> and React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
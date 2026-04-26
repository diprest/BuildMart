import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-box">BM</span>
              <span className="logo-text">BuildMart</span>
            </Link>
            <p className="footer-tagline">Your trusted source for premium construction materials and tools.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#">Products</a>
            <a href="#">Categories</a>
            <a href="#">Deals</a>
            <a href="#">About Us</a>
          </div>

          <div className="footer-section">
            <h4>Customer Service</h4>
            <a href="#">Contact Us</a>
            <a href="#">Shipping Info</a>
            <a href="#">Returns</a>
            <a href="#">FAQ</a>
          </div>

          <div className="footer-section newsletter">
            <h4>Newsletter</h4>
            <p>Subscribe to get special offers and updates.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-contact">
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <span>support@buildmart.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>123 Builder St, Construction City, ST 12345</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 BuildMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import './Footer.css';

function Footer() {
  return (
    <footer className="bm-footer">
      <div className="bm-footer__container">
        <div className="bm-footer__grid">
          <div className="bm-footer__brand">
            <p className="bm-footer__brand-title">BuildMart</p>
            <p className="bm-footer__tagline">
              Your trusted source for premium building materials and construction supplies since 1995.
            </p>
            <div className="bm-footer__social">
              <a href="#" className="bm-footer__social-icon" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="bm-footer__social-icon" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="#" className="bm-footer__social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="bm-footer__social-icon" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="bm-footer__section">
            <h4>Quick Links</h4>
            <a href="#">About Us</a>
            <a href="#">Products</a>
            <a href="#">Delivery Info</a>
            <a href="#">Returns Policy</a>
          </div>

          <div className="bm-footer__section">
            <h4>Customer Service</h4>
            <a href="#">Contact Us</a>
            <a href="#">FAQs</a>
            <a href="#">Shipping & Tracking</a>
            <a href="#">Privacy Policy</a>
          </div>

          <div className="bm-footer__section bm-footer__newsletter">
            <h4>Newsletter</h4>
            <p>Subscribe for updates and exclusive deals.</p>
            <div className="bm-footer__newsletter-form">
              <input type="email" placeholder="Your email" />
              <button>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="bm-footer__contact">
          <div className="bm-footer__contact-grid">
            <div className="bm-footer__contact-item">
              <p>Phone</p>
              <p>1-800-BUILD-MART</p>
            </div>
            <div className="bm-footer__contact-item">
              <p>Email</p>
              <p>support@buildmart.com</p>
            </div>
            <div className="bm-footer__contact-item">
              <p>Address</p>
              <p>123 Construction Ave, Builder City, BC 12345</p>
            </div>
          </div>
        </div>

        <div className="bm-footer__bottom">
          <p>© 2026 BuildMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

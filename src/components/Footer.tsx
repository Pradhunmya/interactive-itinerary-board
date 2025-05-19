import React from 'react';

const Footer: React.FC = () => (
  <footer className="custom-footer">
    <div className="footer-container">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-text">T</span>
          </div>
          <h3 className="footer-brand-title">PlanPal Board</h3>
          <p className="footer-brand-desc">
            Making travel planning easy and enjoyable with our intuitive drag-and-drop itinerary builder.
          </p>
        </div>
        <div>
          <h3 className="footer-section-title">Company</h3>
          <ul className="footer-list">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-section-title">Product</h3>
          <ul className="footer-list">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Help Center</a></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-section-title">Contact</h3>
          <ul className="footer-list">
            <li><a href="#">hello@planpalboard.demo</a></li>
            <li><a href="#">+1 (555) 123-4567</a></li>
            <li><a href="#">123 PlanPal St, Suite 100</a></li>
            <li><a href="#">San Francisco, CA 94103</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 PlanPal Board. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
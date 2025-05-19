import React from 'react';

const Features: React.FC = () => (
  <section id="features" className="features-section">
    <div className="features-container">
      <h2 className="features-title">
        Why Choose <span className="features-title-accent">PlanPal Board</span>
      </h2>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            {/* Calendar SVG */}
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#14b8a6" strokeWidth="2">
              <rect x="3" y="5" width="18" height="16" rx="3" fill="#e0fdfa" stroke="#14b8a6"/>
              <path d="M16 3v4M8 3v4M3 9h18" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="feature-card-title">Drag &amp; Drop Planning</h3>
          <p className="feature-card-desc">
            Effortlessly organize your travel days with our intuitive 
            drag-and-drop interface. Adjust your plans on the fly.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            {/* MapPin SVG */}
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#14b8a6" strokeWidth="2">
              <path d="M12 21s-6-5.686-6-10A6 6 0 1 1 18 11c0 4.314-6 10-6 10z" fill="#e0fdfa" stroke="#14b8a6"/>
              <circle cx="12" cy="11" r="2" fill="#14b8a6"/>
            </svg>
          </div>
          <h3 className="feature-card-title">Location Mapping</h3>
          <p className="feature-card-desc">
            See your daily activities mapped out to optimize travel time 
            and discover nearby attractions automatically.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            {/* Share2 SVG */}
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#14b8a6" strokeWidth="2">
              <circle cx="18" cy="5" r="3" fill="#e0fdfa" stroke="#14b8a6"/>
              <circle cx="6" cy="12" r="3" fill="#e0fdfa" stroke="#14b8a6"/>
              <circle cx="18" cy="19" r="3" fill="#e0fdfa" stroke="#14b8a6"/>
              <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" stroke="#14b8a6"/>
            </svg>
          </div>
          <h3 className="feature-card-title">Share &amp; Collaborate</h3>
          <p className="feature-card-desc">
            Share your itineraries with friends and family. 
            Collaborate on trip planning with everyone involved.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
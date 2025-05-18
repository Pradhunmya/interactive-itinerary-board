import React from 'react';

const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="how-it-works-section">
    <div className="howitworks-container">
      <h2 className="howitworks-title">
        How It <span className="howitworks-title-accent">Works</span>
      </h2>
      <div className="howitworks-timeline">
        <div className="howitworks-step">
          <div className="howitworks-step-circle">1</div>
          <div>
            <h3 className="howitworks-step-title">Create Your Trip</h3>
            <p className="howitworks-step-desc">
              Start by creating a new trip and entering your travel dates.
              Our system will automatically set up day-by-day planning sheets.
            </p>
          </div>
        </div>
        <div className="howitworks-step">
          <div className="howitworks-step-circle">2</div>
          <div>
            <h3 className="howitworks-step-title">Add Activities</h3>
            <p className="howitworks-step-desc">
              Search and add activities, restaurants, attractions, and accommodations
              to your daily plans. Include custom notes and reservation details.
            </p>
          </div>
        </div>
        <div className="howitworks-step">
          <div className="howitworks-step-circle">3</div>
          <div>
            <h3 className="howitworks-step-title">Organize with Drag &amp; Drop</h3>
            <p className="howitworks-step-desc">
              Easily rearrange activities by dragging and dropping them into
              your preferred order. Move activities between different days as needed.
            </p>
          </div>
        </div>
        <div className="howitworks-step">
          <div className="howitworks-step-circle">4</div>
          <div>
            <h3 className="howitworks-step-title">Share Your Itinerary</h3>
            <p className="howitworks-step-desc">
              Share your completed itinerary with travel companions via email or link.
              Export as PDF or sync with your calendar for easy access during your trip.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
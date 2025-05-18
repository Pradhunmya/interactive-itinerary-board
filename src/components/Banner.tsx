import React from 'react';

const Banner: React.FC = () => (
    <div className="main-banner">
        <div>
            <h2 className="main-banner-title">
                Plan Your Perfect Trip with <br />
                <span className="main-banner-slogan">Drag &amp; Drop Simplicity</span>
            </h2>
            <p className="main-banner-desc">
                Create beautiful itineraries with our intuitive drag-and-drop interface.<br />
                Organize your days, share with friends, and make your travel planning effortless.
            </p>
        </div>
        {/* <a href="#features" className="main-banner-arrow" aria-label="Scroll down">
            <span>▼</span>
        </a> */}
    </div>
);

export default Banner;
import React from 'react';
import Header from './components/Header';
import ItineraryBoard from './components/ItineraryBoard';
import Footer from './components/Footer';
import Banner from './components/Banner';
import HowItWorks from './components/HowItWorks';
import './styles/main.css';

const App: React.FC = () => (
    <div className="app-container">
        <Header />
        <Banner />
        <HowItWorks />
        <ItineraryBoard />
        <Footer />
    </div>
);

export default App;
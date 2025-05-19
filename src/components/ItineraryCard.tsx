import React from 'react';

export interface ItineraryItem {
  id: string;
  time: string;
  title: string;
  description: string;
  location: string;
  image: string;
  day: number;
}

interface ItineraryCardProps {
  item: ItineraryItem;
}

const ItineraryCard: React.FC<ItineraryCardProps> = ({ item }) => (
  <div className="itinerary-card">
    <img src={item.image} alt={item.title} className="itinerary-card-img" />
    <div className="itinerary-card-content">
      <div className="itinerary-card-time">{item.time}</div>
      <div className="itinerary-card-title">{item.title}</div>
      <div className="itinerary-card-desc">{item.description}</div>
      <div className="itinerary-card-location">{item.location}</div>
    </div>
  </div>
);

export default ItineraryCard;
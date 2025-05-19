import React from 'react';

export interface ItineraryItem {
  id: string;
  time: string;
  title: string;
  description: string;
  location: string;
  day: number;
}

interface ItineraryCardProps {
  item: ItineraryItem;
  onEdit?: () => void; // Only triggers modal
  onDelete?: () => void;
}

const ItineraryCard: React.FC<ItineraryCardProps> = ({ item, onEdit, onDelete }) => {
  return (
    <div className="itinerary-card">
      <div className="itinerary-card-content">
        <div className="itinerary-card-time">{item.time}</div>
        <div className="itinerary-card-title">{item.title}</div>
        <div className="itinerary-card-desc">{item.description}</div>
        <div className="itinerary-card-location">{item.location}</div>
        <div style={{ marginTop: 8 }}>
          <button className="custom-button" onClick={onEdit}>Edit</button>
          <button className="custom-button" onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ItineraryCard;
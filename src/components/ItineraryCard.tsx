import React, { useState } from 'react';

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
  onEdit?: (updated: Partial<ItineraryItem>) => void;
  onDelete?: () => void;
}

const ItineraryCard: React.FC<ItineraryCardProps> = ({ item, onEdit, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(item);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onEdit?.(form);
    setEditing(false);
  };

  return (
    <div className="itinerary-card">
      <img src={item.image} alt={item.title} className="itinerary-card-img" />
      <div className="itinerary-card-content">
        {editing ? (
          <>
            <input name="title" value={form.title} onChange={handleChange} />
            <input name="time" value={form.time} onChange={handleChange} />
            <textarea name="description" value={form.description} onChange={handleChange} />
            <input name="location" value={form.location} onChange={handleChange} />
            <button className="custom-button" onClick={handleSave}>Save</button>
            <button className="custom-button" onClick={() => setEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <div className="itinerary-card-time">{item.time}</div>
            <div className="itinerary-card-title">{item.title}</div>
            <div className="itinerary-card-desc">{item.description}</div>
            <div className="itinerary-card-location">{item.location}</div>
            <div style={{ marginTop: 8 }}>
              <button className="custom-button" onClick={() => setEditing(true)}>Edit</button>
              <button className="custom-button" onClick={onDelete}>Delete</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ItineraryCard;
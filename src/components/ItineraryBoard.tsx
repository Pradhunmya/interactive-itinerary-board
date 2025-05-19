import React, { useState } from 'react';
import ItineraryCard, { ItineraryItem } from './ItineraryCard';

const initialItineraryData: ItineraryItem[] = [
  {
    id: '1',
    time: '09:00 AM',
    title: 'Sunrise Breakfast at Mountainview Cafe',
    description: 'Start your day with a delicious breakfast while enjoying breathtaking mountain views.',
    location: 'Downtown',
    image: 'https://images.unsplash.com/photo-1533630018502-93775aa3fa51?auto=format&fit=crop&q=80&w=500',
    day: 1,
  },
  {
    id: '2',
    time: '11:00 AM',
    title: 'Guided Tour of Historic City Center',
    description: 'Explore the rich history and architecture with our expert local guide.',
    location: 'Old City',
    image: 'https://images.unsplash.com/photo-1581373449483-37449f962b6c?auto=format&fit=crop&q=80&w=500',
    day: 1,
  },
  {
    id: '3',
    time: '02:00 PM',
    title: 'Lunch at Seaside Restaurant',
    description: 'Enjoy fresh seafood with panoramic ocean views at this acclaimed local eatery.',
    location: 'Harbor',
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=500',
    day: 1,
  },
  {
    id: '4',
    time: '04:30 PM',
    title: 'Botanical Garden Visit',
    description: 'Wander through exotic plants and flowers in this tranquil garden setting.',
    location: 'East Side',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=500',
    day: 1,
  },
  {
    id: '5',
    time: '07:00 PM',
    title: 'Sunset Dinner Cruise',
    description: 'End your day with a luxurious dinner while sailing along the coastline.',
    location: 'Marina',
    image: 'https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?auto=format&fit=crop&q=80&w=500',
    day: 1,
  },
  {
    id: '6',
    time: '09:00 AM',
    title: 'Hiking at National Park',
    description: 'Explore scenic trails and breathtaking viewpoints in the renowned national park.',
    location: 'National Park',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=500',
    day: 2,
  },
  {
    id: '7',
    time: '01:00 PM',
    title: 'Local Winery Tour & Tasting',
    description: 'Sample award-winning wines at this picturesque family-owned vineyard.',
    location: 'Wine Country',
    image: 'https://images.unsplash.com/photo-1507434965515-61970b32c7c7?auto=format&fit=crop&q=80&w=500',
    day: 2,
  },
  {
    id: '8',
    time: '04:00 PM',
    title: 'Cultural Museum Visit',
    description: 'Immerse yourself in local culture and history at this interactive museum.',
    location: 'Cultural District',
    image: 'https://images.unsplash.com/photo-1565060050234-8a38880881fc?auto=format&fit=crop&q=80&w=500',
    day: 2,
  },
  {
    id: '9',
    time: '07:30 PM',
    title: 'Fine Dining Experience',
    description: 'Enjoy a multi-course tasting menu at this Michelin-starred restaurant.',
    location: 'Uptown',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=500',
    day: 2,
  },
];

const ItineraryBoard: React.FC = () => {
  const [itineraryItems, setItineraryItems] = useState<ItineraryItem[]>(initialItineraryData);
  const [activeDay, setActiveDay] = useState<number>(1);
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null);

  const handleDragStart = (itemId: string) => setDraggedItemId(itemId);

  const handleDragOver = (e: React.DragEvent, itemId: string) => {
    e.preventDefault();
    if (!draggedItemId || draggedItemId === itemId) return;
    const draggedIndex = itineraryItems.findIndex(item => item.id === draggedItemId);
    const targetIndex = itineraryItems.findIndex(item => item.id === itemId);
    if (draggedIndex !== -1 && targetIndex !== -1) {
      const newItems = [...itineraryItems];
      const [draggedItem] = newItems.splice(draggedIndex, 1);
      newItems.splice(targetIndex, 0, draggedItem);
      setItineraryItems(newItems);
    }
  };

  const handleDragEnd = () => setDraggedItemId(null);

  const days = Array.from(new Set(itineraryItems.map(item => item.day))).sort((a, b) => a - b);

  return (
    <div className="itinerary-board-modern">
      <div className="itinerary-board-header">
        <h2>Your Itinerary</h2>
        <div className="itinerary-board-days">
          {days.map(day => (
            <button
              key={day}
              className={`day-tab${activeDay === day ? ' active' : ''}`}
              onClick={() => setActiveDay(day)}
            >
              Day {day}
            </button>
          ))}
        </div>
      </div>
      <div className="itinerary-board-list">
        {itineraryItems.filter(item => item.day === activeDay).length === 0 ? (
          <div className="empty-day">
            <p>No activities planned for this day.</p>
            <button className="custom-button">+ Add Activity</button>
          </div>
        ) : (
          itineraryItems
            .filter(item => item.day === activeDay)
            .map(item => (
              <div
                key={item.id}
                draggable
                onDragStart={() => handleDragStart(item.id)}
                onDragOver={e => handleDragOver(e, item.id)}
                onDragEnd={handleDragEnd}
                className={draggedItemId === item.id ? 'dragging' : ''}
              >
                <ItineraryCard item={item} />
              </div>
            ))
        )}
      </div>
      <div className="itinerary-board-footer">
        <p>Drag and drop items to reorder your daily activities</p>
        <button className="custom-button">+ Add New Activity</button>
      </div>
    </div>
  );
};

export default ItineraryBoard;
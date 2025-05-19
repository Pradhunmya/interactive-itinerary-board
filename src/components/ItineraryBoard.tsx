import React, { useState } from 'react';
import ItineraryCard, { ItineraryItem } from './ItineraryCard';
import ActivityModal from './ActivityModal';

// Simple SVG icons for add and delete
const PlusIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#14b8a6" strokeWidth="2">
    <circle cx="12" cy="12" r="10" stroke="#14b8a6" fill="#e0fdfa"/>
    <path d="M12 8v8M8 12h8" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const TrashIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#e11d48" strokeWidth="2">
    <rect x="5" y="7" width="14" height="12" rx="2" fill="#fff" stroke="#e11d48"/>
    <path d="M9 11v4M15 11v4M10 7V5a2 2 0 0 1 4 0v2" stroke="#e11d48" strokeWidth="2"/>
    <path d="M4 7h16" stroke="#e11d48" strokeWidth="2"/>
  </svg>
);

interface DayPlan {
  day: number;
  activities: ItineraryItem[];
}

const initialData: DayPlan[] = [
  {
    day: 1,
    activities: [
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
    ],
  },
  {
    day: 2,
    activities: [
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
    ],
  },
];

const ItineraryBoard: React.FC = () => {
  const [days, setDays] = useState<DayPlan[]>(initialData);
  const [activeDay, setActiveDay] = useState<number>(1);
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<ItineraryItem | null>(null);

  // --- Activity CRUD ---
  const addActivity = (activity: ItineraryItem, dayNum: number) => {
    setDays(prev =>
      prev.map(day =>
        day.day === dayNum
          ? { ...day, activities: [...day.activities, activity] }
          : day
      )
    );
  };

  const editActivity = (activityId: string, updated: Partial<ItineraryItem>, dayNum: number) => {
    setDays(prev =>
      prev.map(day =>
        day.day === dayNum
          ? {
              ...day,
              activities: day.activities.map(act =>
                act.id === activityId ? { ...act, ...updated } : act
              ),
            }
          : day
      )
    );
  };

  const deleteActivity = (activityId: string, dayNum: number) => {
    setDays(prev =>
      prev.map(day =>
        day.day === dayNum
          ? { ...day, activities: day.activities.filter(act => act.id !== activityId) }
          : day
      )
    );
  };

  // --- Day CRUD ---
  const addDay = () => {
    const nextDay = days.length ? Math.max(...days.map(d => d.day)) + 1 : 1;
    setDays([...days, { day: nextDay, activities: [] }]);
    setActiveDay(nextDay);
  };

  const deleteDay = (dayNum: number) => {
    setDays(days.filter(day => day.day !== dayNum));
    setActiveDay(days.length > 1 ? days[0].day : 1);
  };

  // --- Drag & Drop for Activities ---
  const handleDragStart = (itemId: string) => setDraggedItemId(itemId);

  const handleDragOver = (e: React.DragEvent, itemId: string) => {
    e.preventDefault();
    if (!draggedItemId || draggedItemId === itemId) return;
    setDays(prev =>
      prev.map(day =>
        day.day === activeDay
          ? {
              ...day,
              activities: reorderActivities(day.activities, draggedItemId, itemId),
            }
          : day
      )
    );
  };

  const handleDragEnd = () => setDraggedItemId(null);

  const reorderActivities = (activities: ItineraryItem[], draggedId: string, targetId: string) => {
    const draggedIdx = activities.findIndex(a => a.id === draggedId);
    const targetIdx = activities.findIndex(a => a.id === targetId);
    if (draggedIdx === -1 || targetIdx === -1) return activities;
    const updated = [...activities];
    const [dragged] = updated.splice(draggedIdx, 1);
    updated.splice(targetIdx, 0, dragged);
    return updated;
  };

  // Add Activity handler
  const handleAddActivity = (activity: ItineraryItem) => {
    addActivity(activity, activeDay);
  };

  // Edit Activity handler
  const handleEditActivity = (activity: ItineraryItem) => {
    editActivity(activity.id, activity, activeDay);
  };

  // --- Render ---
  const currentDay = days.find(d => d.day === activeDay);

  return (
    <div className="itinerary-board-modern">
      <div className="itinerary-board-header">
        <h2>Your Itinerary</h2>
        <div className="itinerary-board-days-row">
          <div className="itinerary-board-days">
            {days.map(day => (
              <button
                key={day.day}
                className={`day-tab${activeDay === day.day ? ' active' : ''}`}
                onClick={() => setActiveDay(day.day)}
              >
                Day {day.day}
              </button>
            ))}
          </div>
          <div className="itinerary-board-day-actions">
            <button
              className="icon-btn"
              title="Add Day"
              onClick={addDay}
              aria-label="Add Day"
            >
              <PlusIcon />
            </button>
            {days.length > 1 && (
              <button
                className="icon-btn"
                title="Delete Day"
                onClick={() => deleteDay(activeDay)}
                aria-label="Delete Day"
              >
                <TrashIcon />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="itinerary-board-list">
        {currentDay && currentDay.activities.length === 0 ? (
          <div className="empty-day">
            {/* <p>No activities planned for this day.</p>
            <button className="custom-button" onClick={() => { setEditItem(null); setModalOpen(true); }}>+ Add Activity</button> */}
          </div>
        ) : (
          currentDay?.activities.map(item => (
            <div
              key={item.id}
              draggable
              onDragStart={() => handleDragStart(item.id)}
              onDragOver={e => handleDragOver(e, item.id)}
              onDragEnd={handleDragEnd}
              className={draggedItemId === item.id ? 'dragging' : ''}
            >
              <ItineraryCard
                item={item}
                onEdit={() => { setEditItem(item); setModalOpen(true); }}
                onDelete={() => deleteActivity(item.id, activeDay)}
              />
            </div>
          ))
        )}
      </div>
      <div className="itinerary-board-footer">
        <p>Drag and drop items to reorder your daily activities</p>
        <button className="custom-button" onClick={() => { setEditItem(null); setModalOpen(true); }}>+ Add New Activity</button>
      </div>
      <ActivityModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={editItem ? handleEditActivity : handleAddActivity}
        initial={editItem || undefined}
        day={activeDay}
      />
    </div>
  );
};

export default ItineraryBoard;
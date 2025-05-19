import React, { useState, useEffect } from 'react';
import { ItineraryItem } from './ItineraryCard';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=500';

interface ActivityModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (activity: ItineraryItem) => void;
  initial?: Partial<ItineraryItem>;
  day: number;
}

const ActivityModal: React.FC<ActivityModalProps> = ({
  open,
  onClose,
  onSave,
  initial,
  day,
}) => {
  const [form, setForm] = useState<ItineraryItem>({
    id: initial?.id || Math.random().toString(36).slice(2),
    time: initial?.time || '',
    title: initial?.title || '',
    description: initial?.description || '',
    location: initial?.location || '',
    day,
  });

  useEffect(() => {
    if (initial) {
      setForm({
        id: initial.id || Math.random().toString(36).slice(2),
        time: initial.time || '',
        title: initial.title || '',
        description: initial.description || '',
        location: initial.location || '',
        day,
      });
    } else {
      setForm({
        id: Math.random().toString(36).slice(2),
        time: '',
        title: '',
        description: '',
        location: '',
        day,
      });
    }
  }, [initial, day, open]);

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <div className="modal">
      <form className="modal-content activity-modal-content" onSubmit={handleSubmit}>
        <h2 className="activity-modal-title">
          {initial ? 'Edit Activity' : 'Add Activity'}
        </h2>
        <div className="activity-modal-inputs">
          <label>
            <span>Title</span>
            <input
              name="title"
              placeholder="Activity Title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <span>Time</span>
            <input
              name="time"
              placeholder="e.g. 09:00 AM"
              value={form.time}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <span>Description</span>
            <textarea
              name="description"
              placeholder="Describe the activity"
              value={form.description}
              onChange={handleChange}
              required
              rows={3}
            />
          </label>
          <label>
            <span>Location</span>
            <input
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="activity-modal-actions">
          <button type="submit" className="custom-button">
            {initial ? 'Save' : 'Add'}
          </button>
          <button type="button" className="custom-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ActivityModal;
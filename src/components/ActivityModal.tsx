import React, { useState, useEffect } from 'react';
import { ItineraryItem } from './ItineraryCard';

interface ActivityModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (activity: ItineraryItem) => void;
  initial?: Partial<ItineraryItem>;
  day: number;
}

const ActivityModal: React.FC<ActivityModalProps> = ({ open, onClose, onSave, initial, day }) => {
  const [form, setForm] = useState<ItineraryItem>({
    id: initial?.id || Math.random().toString(36).slice(2),
    time: initial?.time || '',
    title: initial?.title || '',
    description: initial?.description || '',
    location: initial?.location || '',
    image: initial?.image || '',
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
        image: initial.image || '',
        day,
      });
    }
  }, [initial, day, open]);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <div className="modal">
      <form className="modal-content" onSubmit={handleSubmit}>
        <h2>{initial ? 'Edit Activity' : 'Add Activity'}</h2>
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          name="time"
          placeholder="Time (e.g. 09:00 AM)"
          value={form.time}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        />
        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />
        <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
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
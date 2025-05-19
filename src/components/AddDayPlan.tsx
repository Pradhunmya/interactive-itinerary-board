import React, { useState } from 'react';

interface AddDayPlanProps {
    onAdd: (day: string, activities: string[]) => void;
}

const AddDayPlan: React.FC<AddDayPlanProps> = ({ onAdd }) => {
    const [day, setDay] = useState('');
    const [activities, setActivities] = useState('');
    const [show, setShow] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (day && activities) {
            onAdd(day, activities.split(',').map(a => a.trim()));
            setDay('');
            setActivities('');
            setShow(false);
        }
    };

    return (
        <>
            <button className="custom-button" onClick={() => setShow(true)}>+ Add Day</button>
            {show && (
                <div className="modal">
                    <form onSubmit={handleSubmit} className="modal-content">
                        <h2>Add Day Plan</h2>
                        <input
                            type="text"
                            placeholder="Day (e.g. Day 4)"
                            value={day}
                            onChange={e => setDay(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Activities (comma separated)"
                            value={activities}
                            onChange={e => setActivities(e.target.value)}
                            required
                        />
                        <button type="submit" className="custom-button">Add</button>
                        <button type="button" className="custom-button" onClick={() => setShow(false)}>Cancel</button>
                    </form>
                </div>
            )}
        </>
    );
};

export default AddDayPlan;
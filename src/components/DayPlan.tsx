import React, { useState } from 'react';

interface DayPlanProps {
    day: string;
    activities: string[];
    onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
    onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
    onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
    onEdit: (day: string, activities: string[]) => void;
    onDelete: () => void;
}

const DayPlan: React.FC<DayPlanProps> = ({
    day,
    activities,
    onDragStart,
    onDragOver,
    onDrop,
    onEdit,
    onDelete,
}) => {
    const [editing, setEditing] = useState(false);
    const [editDay, setEditDay] = useState(day);
    const [editActivities, setEditActivities] = useState(activities.join(', '));

    const handleEditSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onEdit(editDay, editActivities.split(',').map(a => a.trim()));
        setEditing(false);
    };

    return (
        <div
            className="day-plan"
            draggable
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
        >
            {editing ? (
                <form onSubmit={handleEditSubmit} className="edit-form">
                    <input
                        value={editDay}
                        onChange={e => setEditDay(e.target.value)}
                        required
                    />
                    <input
                        value={editActivities}
                        onChange={e => setEditActivities(e.target.value)}
                        required
                    />
                    <button type="submit" className="custom-button">Save</button>
                    <button type="button" className="custom-button" onClick={() => setEditing(false)}>Cancel</button>
                </form>
            ) : (
                <>
                    <h3>{day}</h3>
                    <ul>
                        {activities.map((activity, index) => (
                            <li key={index}>{activity}</li>
                        ))}
                    </ul>
                    <div className="plan-actions">
                        <button className="custom-button" onClick={() => setEditing(true)}>Edit</button>
                        <button className="custom-button" onClick={onDelete}>Delete</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default DayPlan;
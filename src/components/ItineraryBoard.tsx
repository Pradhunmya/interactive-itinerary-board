import React, { useRef } from 'react';
import DayPlan from './DayPlan';
import useDragAndDrop from '../hooks/useDragAndDrop';
import AddDayPlan from './AddDayPlan';

const initialPlans = [
    { day: 'Day 1', activities: ['Visit museum', 'Lunch at cafe'] },
    { day: 'Day 2', activities: ['Hiking', 'Dinner at restaurant'] },
    { day: 'Day 3', activities: ['Beach', 'Shopping'] },
];

const ItineraryBoard: React.FC = () => {
    const { items, setItems } = useDragAndDrop(initialPlans);
    const dragItem = useRef<number | null>(null);

    const handleDragStart = (index: number) => (e: React.DragEvent<HTMLDivElement>) => {
        dragItem.current = index;
        e.currentTarget.classList.add('dragging');
    };

    const handleDragOver = (index: number) => (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.currentTarget.classList.add('drag-over');
    };

    const handleDrop = (index: number) => (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.currentTarget.classList.remove('drag-over');
        document.querySelectorAll('.dragging').forEach(el => el.classList.remove('dragging'));
        if (dragItem.current === null || dragItem.current === index) return;
        const updatedItems = [...items];
        const [removed] = updatedItems.splice(dragItem.current, 1);
        updatedItems.splice(index, 0, removed);
        setItems(updatedItems);
        dragItem.current = null;
    };

    const handleAddDay = (day: string, activities: string[]) => {
        setItems([...items, { day, activities }]);
    };

    const handleEditDay = (index: number, newDay: string, newActivities: string[]) => {
        const updated = [...items];
        updated[index] = { day: newDay, activities: newActivities };
        setItems(updated);
    };

    const handleDeleteDay = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div className="itinerary-board">
            <AddDayPlan onAdd={handleAddDay} />
            {items.map((plan, index) => (
                <DayPlan
                    key={index}
                    day={plan.day}
                    activities={plan.activities}
                    onDragStart={handleDragStart(index)}
                    onDragOver={handleDragOver(index)}
                    onDrop={handleDrop(index)}
                    onEdit={(newDay, newActivities) => handleEditDay(index, newDay, newActivities)}
                    onDelete={() => handleDeleteDay(index)}
                />
            ))}
        </div>
    );
};

export default ItineraryBoard;
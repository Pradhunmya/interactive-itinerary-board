export interface DayPlanProps {
    id: string;
    title: string;
    activities: string[];
}

export interface ItineraryBoardProps {
    dayPlans: DayPlanProps[];
    onDayPlanReorder: (sourceIndex: number, destinationIndex: number) => void;
}
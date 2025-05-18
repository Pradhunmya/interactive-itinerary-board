import { useState } from 'react';

function useDragAndDrop<T>(initialItems: T[]) {
    const [items, setItems] = useState<T[]>(initialItems);
    return { items, setItems };
}

export default useDragAndDrop;
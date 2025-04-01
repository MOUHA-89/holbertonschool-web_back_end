export default function updateUniqueItems(map) {
    const update = new Map()
    if (!items instanceof map) {
        throw new Error('cannot process');
    }
    for (const [key, value] of items) {
        if (value === 1) {
            items.set(key, 100);
        }
    }

    return items; 
}
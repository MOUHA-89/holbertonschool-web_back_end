export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('cannot process');
  }
  for (const [key, value] of map) {
    if (value === 1) {
      items.set(key, 100);
    }
  }
  return map;
}

export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('cannot process');
  }
  for (const [key, value] of Map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
  return map;
}

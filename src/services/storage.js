// Simple localStorage-based persistence

export function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
export function loadData(key, defaultValue) {
  const data = localStorage.getItem(key);
  if (!data) return defaultValue;
  try {
    return JSON.parse(data);
  } catch {
    return defaultValue;
  }
}
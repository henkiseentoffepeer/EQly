const KEY = "nvc_journal_entries";

export function saveToJournal(entry) {
  const arr = getJournal();
  arr.push({ ...entry, ts: Date.now() });
  localStorage.setItem(KEY, JSON.stringify(arr));
}

export function getJournal() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function deleteEntry(ts) {
  const arr = getJournal().filter(e => e.ts !== ts);
  localStorage.setItem(KEY, JSON.stringify(arr));
}
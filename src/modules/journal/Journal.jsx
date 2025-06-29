import React, { useState } from "react";
import { getJournal, deleteEntry } from "./journalUtils.js";

export default function Journal() {
  const [entries, setEntries] = useState(getJournal());

  function remove(ts) {
    if (window.confirm("Delete this entry?")) {
      deleteEntry(ts);
      setEntries(getJournal());
    }
  }

  return (
    <section className="module-section">
      <h2>Conversation Journal</h2>
      {entries.length === 0 ? (
        <p>No entries yet. Build an NVC statement and save it here.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {entries.slice().reverse().map(e => (
            <li key={e.ts} style={{
              marginBottom: 18,
              background: "#f7f7f7",
              borderRadius: 8,
              padding: 12
            }}>
              <div>
                <b>Observation:</b> {e.observation}<br />
                <b>Feeling:</b> {e.feeling}<br />
                <b>Need:</b> {e.need}<br />
                <b>Request:</b> {e.request}
              </div>
              <div style={{ color: "#78909c", fontSize: "0.85em", margin: "0.5em 0" }}>
                {new Date(e.ts).toLocaleString()}
              </div>
              <button onClick={() => remove(e.ts)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
import React, { useState } from "react";
import { feelings, needs } from "./wordbanks.js";

function WordList({ words, title }) {
  const [query, setQuery] = useState("");
  const filtered = words.filter(w => w.toLowerCase().includes(query.toLowerCase()));
  return (
    <section style={{ marginBottom: 32 }}>
      <h3>{title}</h3>
      <input
        placeholder={`Search ${title.toLowerCase()}`}
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ width: "100%" }}
      />
      <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 8 }}>
        {filtered.map((w, i) => (
          <span key={i} style={{
            background: "#b2dfdb",
            borderRadius: 8,
            padding: "0.25em 0.7em",
            margin: 2
          }}>{w}</span>
        ))}
      </div>
    </section>
  );
}

export default function EmotionLib() {
  return (
    <div className="module-section">
      <h2>Feelings &amp; Needs Library</h2>
      <WordList words={feelings} title="Feelings" />
      <WordList words={needs} title="Needs" />
      <div style={{ fontSize: "0.95em", color: "#607d8b", marginTop: 24 }}>
        Expand your emotional vocabulary. Consult this list during practice!
      </div>
    </div>
  );
}
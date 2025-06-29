import React, { useState } from "react";
import { feelings, needs } from "../emotionLib/wordbanks.js";

function analyzeNVC(text) {
  // Super simple: look for blame/judgment words and suggest more NVC-y phrasing
  const blameWords = ["always", "never", "should", "must", "fault", "because of you", "you make me"];
  const found = blameWords.filter(w => text.toLowerCase().includes(w));
  const suggestions = [];
  if (found.length) suggestions.push("Try to avoid blame/judgment words: " + found.join(", "));
  if (!feelings.some(f => text.toLowerCase().includes(f))) suggestions.push("Tip: Add a feeling word.");
  if (!needs.some(n => text.toLowerCase().includes(n))) suggestions.push("Tip: Add a need word.");
  if (!text.includes("?")) suggestions.push("Tip: End with a clear request (often a question).");
  return suggestions;
}

export default function Reflection() {
  const [input, setInput] = useState("");
  const [tips, setTips] = useState([]);

  function handleChange(e) {
    const txt = e.target.value;
    setInput(txt);
    setTips(analyzeNVC(txt));
  }

  return (
    <section className="module-section">
      <h2>Live Reflection</h2>
      <textarea
        rows={3}
        value={input}
        onChange={handleChange}
        placeholder="Paste or write a message to check its NVC tone"
        style={{ width: "100%" }}
      />
      <ul style={{ color: "#d84315", margin: "0.7em 0" }}>
        {tips.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
      {input && !tips.length && (
        <div style={{ color: "#00796b", marginTop: 8 }}>Looks like a good NVC statement!</div>
      )}
      <div style={{ fontSize: "0.95em", color: "#607d8b", marginTop: 18 }}>
        This module helps you reflect and rephrase for more connection.
      </div>
    </section>
  );
}
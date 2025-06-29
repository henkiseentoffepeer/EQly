import React, { useState } from "react";
import { feelings, needs } from "../emotionLib/wordbanks.js";
import { saveToJournal } from "../journal/journalUtils.js";

const steps = [
  { key: "observation", prompt: "What did you observe? (Just facts, no judgments)" },
  { key: "feeling", prompt: "How did you feel? (Pick or describe)" },
  { key: "need", prompt: "What do you need or value?" },
  { key: "request", prompt: "What's your concrete, doable request?" },
];

export default function NVCCoach() {
  const [form, setForm] = useState({ observation: "", feeling: "", need: "", request: "" });
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  function handleNext() {
    if (step < steps.length - 1) setStep(step + 1);
    else setDone(true);
  }
  function handleBack() {
    if (step > 0) setStep(step - 1);
  }
  function handleChange(e) {
    setForm({ ...form, [steps[step].key]: e.target.value });
  }
  function pickFeeling(f) { setForm({ ...form, feeling: f }); }
  function pickNeed(n) { setForm({ ...form, need: n }); }
  function handleSave() {
    saveToJournal(form);
    setDone(false);
    setForm({ observation: "", feeling: "", need: "", request: "" });
    setStep(0);
  }

  return (
    <section className="module-section">
      <h2>Practice NVC</h2>
      {!done ? (
        <>
          <label>
            <b>Step {step + 1}: {steps[step].prompt}</b>
            {steps[step].key === "feeling" ? (
              <>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "0.5em 0" }}>
                  {feelings.slice(0, 8).map((f, i) => (
                    <button key={i} type="button" onClick={() => pickFeeling(f)}>{f}</button>
                  ))}
                  <input
                    placeholder="Other feeling"
                    value={form.feeling}
                    onChange={handleChange}
                  />
                </div>
              </>
            ) : steps[step].key === "need" ? (
              <>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "0.5em 0" }}>
                  {needs.slice(0, 8).map((n, i) => (
                    <button key={i} type="button" onClick={() => pickNeed(n)}>{n}</button>
                  ))}
                  <input
                    placeholder="Other need"
                    value={form.need}
                    onChange={handleChange}
                  />
                </div>
              </>
            ) : (
              <textarea
                rows={2}
                value={form[steps[step].key]}
                onChange={handleChange}
                placeholder={steps[step].prompt}
                style={{ width: "100%" }}
              />
            )}
          </label>
          <div style={{ marginTop: 16 }}>
            {step > 0 && <button onClick={handleBack}>Back</button>}
            <button style={{ float: "right" }} onClick={handleNext} disabled={!form[steps[step].key]}>Next</button>
          </div>
        </>
      ) : (
        <div>
          <h3>Your NVC Statement:</h3>
          <blockquote style={{ background: "#f7f7f7", padding: 12, borderRadius: 8 }}>
            When I see <b>{form.observation}</b>,<br />
            I feel <b>{form.feeling}</b>,<br />
            because I need <b>{form.need}</b>.<br />
            Would you be willing to <b>{form.request}</b>?
          </blockquote>
          <button onClick={handleSave}>Save to Journal &amp; Start Over</button>
        </div>
      )}
    </section>
  );
}
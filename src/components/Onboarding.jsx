import React from "react";
import Card from "./ui/Card";

export default function Onboarding() {
  return (
    <Card>
      <h1>NVC Emotional Toolkit</h1>
      <p>
        Welcome! This app helps you practice Nonviolent Communication (NVC) and build your emotional intelligence.
      </p>
      <ul>
        <li>🪴 Step-by-step NVC statement builder</li>
        <li>🧭 Explore feelings & needs vocabulary</li>
        <li>🔄 Live rephraser for gentle feedback</li>
        <li>📒 Save conversations in your private journal</li>
        <li>☕ Optional: Support the project via solidarity donations</li>
      </ul>
      <p>
        All data stays private, on your device. You can switch between light/dark modes and add your own emotions/needs.
      </p>
      <p>
        Ready? <b>Start with the <a href="/coach">NVC Coach</a></b>, or explore other modules above.
      </p>
    </Card>
  );
}
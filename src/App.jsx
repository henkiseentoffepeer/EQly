import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import NVCCoach from "./modules/nvcCoach/NVCCoach.jsx";
import EmotionLib from "./modules/emotionLib/EmotionLib.jsx";
import Reflection from "./modules/reflection/Reflection.jsx";
import Journal from "./modules/journal/Journal.jsx";
import Payment from "./modules/payment/Payment.jsx";

const modules = [
  { path: "/nvc", label: "NVC Coach", el: <NVCCoach /> },
  { path: "/emotions", label: "Feelings & Needs", el: <EmotionLib /> },
  { path: "/reflection", label: "Reflection", el: <Reflection /> },
  { path: "/journal", label: "Journal", el: <Journal /> },
];

export default function App() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <span role="img" aria-label="Dove">🕊️</span> NVC Emotional Toolkit
        </h1>
        <nav>
          {modules.map(m => (
            <Link key={m.path} to={m.path}>{m.label}</Link>
          ))}
        </nav>
      </header>
      <Routes>
        {modules.map(m => (
          <Route key={m.path} path={m.path} element={m.el} />
        ))}
        <Route path="/" element={<Navigate to="/nvc" replace />} />
      </Routes>
      <Payment />
      <footer style={{ marginTop: "2rem", textAlign: "center", fontSize: "0.9em", color: "#607d8b" }}>
        <a href="https://github.com/henkiseentoffepeer/nvc-emotional-toolkit" target="_blank" rel="noopener noreferrer">
          source
        </a>
        {" · "}
        MIT &nbsp;·&nbsp; <span>Built with ❤️ for emotional growth</span>
      </footer>
    </div>
  );
}
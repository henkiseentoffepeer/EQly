import React from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import PaymentBanner from "../modules/payment/PaymentBanner";

export default function Layout({ children }) {
  return (
    <div>
      <header style={{ padding: "1rem", display: "flex", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
        <nav style={{ display: "flex", gap: 12 }}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/coach">NVC Coach</NavLink>
          <NavLink to="/emotions">Emotion & Needs</NavLink>
          <NavLink to="/reflection">Live Reflection</NavLink>
          <NavLink to="/journal">Journal</NavLink>
        </nav>
        <div>
          <ThemeSwitcher />
        </div>
      </header>
      <PaymentBanner />
      <main style={{ maxWidth: 640, margin: "0 auto", padding: "1rem" }}>
        {children}
      </main>
      <footer style={{ textAlign: "center", padding: "0.5rem", color: "var(--color-muted)" }}>
        <small>
          NVC Emotional Toolkit &copy; {new Date().getFullYear()} | MIT License
        </small>
      </footer>
    </div>
  );
}
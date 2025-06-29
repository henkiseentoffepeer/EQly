import React from "react";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 1000
      }}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        style={{ background: "var(--color-card)", borderRadius: 10, padding: 24, minWidth: 280, maxWidth: "90vw" }}
        onClick={e => e.stopPropagation()}
      >
        {children}
        <button style={{ marginTop: 16 }} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
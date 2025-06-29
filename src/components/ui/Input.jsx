import React from "react";

export default function Input({ label, ...props }) {
  return (
    <label style={{ display: "block", marginBottom: 8 }}>
      {label && <span style={{ display: "block", marginBottom: 2 }}>{label}</span>}
      <input style={{ padding: "0.5em", borderRadius: 4, border: "1px solid var(--color-muted)", width: "100%" }} {...props} />
    </label>
  );
}
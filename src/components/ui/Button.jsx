import React from "react";

export default function Button({ children, ...props }) {
  return (
    <button
      style={{
        background: "var(--color-accent)",
        color: "white",
        border: "none",
        borderRadius: 6,
        padding: "0.5em 1.25em",
        fontWeight: 600,
        cursor: "pointer"
      }}
      {...props}
    >
      {children}
    </button>
  );
}
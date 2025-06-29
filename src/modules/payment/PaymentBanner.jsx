import React, { useState } from "react";

const LINKS = [
  { label: "Ko-fi", url: "https://ko-fi.com/", emoji: "☕" },
  { label: "Open Collective", url: "https://opencollective.com/", emoji: "🤝" },
  { label: "Crypto", url: "https://cryptodonate.io/", emoji: "₿" }
];

export default function PaymentBanner() {
  const [dismissed, setDismissed] = useState(() => {
    return window.localStorage.getItem("paymentBannerDismissed") === "1";
  });

  if (dismissed) return null;

  return (
    <div
      style={{
        background: "var(--color-card)",
        borderBottom: "1px solid var(--color-muted)",
        padding: "0.5em 1em",
        textAlign: "center",
        fontSize: 15,
        position: "sticky", top: 0, zIndex: 10
      }}
      role="region"
      aria-label="Support banner"
    >
      💚 This project is solidarity-based. If you find it helpful, consider buying us a coffee:
      {LINKS.map(l =>
        <a
          key={l.url}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 8px" }}
        >
          {l.emoji} {l.label}
        </a>
      )}
      <button
        onClick={() => {
          setDismissed(true);
          window.localStorage.setItem("paymentBannerDismissed", "1");
        }}
        style={{
          marginLeft: 16,
          background: "none",
          border: "none",
          color: "var(--color-accent)",
          cursor: "pointer",
          fontSize: 15
        }}
        aria-label="Hide support banner"
      >
        x
      </button>
    </div>
  );
}
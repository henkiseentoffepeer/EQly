import React, { useEffect, useState } from "react";

const STORAGE_KEY = "nvc_payment_dismissed";
const PAY_URL = "https://ko-fi.com/henkiseentoffepeer";

export default function Payment() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY) === "true") return;
    // Show banner after a few seconds or every 5th session
    const count = +(window.localStorage.getItem("nvc_session_count") || 0) + 1;
    window.localStorage.setItem("nvc_session_count", "" + count);
    if (count % 5 === 0) setShow(true);
  }, []);

  function dismiss() {
    setShow(false);
    window.localStorage.setItem(STORAGE_KEY, "true");
  }

  if (!show) return null;
  return (
    <div style={{
      position: "fixed",
      bottom: 8, left: "50%", transform: "translateX(-50%)",
      background: "#fffde7", color: "#37474f",
      border: "1px solid #ffe082",
      borderRadius: 16,
      padding: "1em 2em",
      boxShadow: "0 2px 10px #0002",
      zIndex: 9999
    }}>
      <span role="img" aria-label="coffee">☕</span>{" "}
      Enjoying the app? <a href={PAY_URL} target="_blank" rel="noopener noreferrer">Buy me a coffee</a>
      <button onClick={dismiss} style={{
        marginLeft: 18, background: "#ffe082", border: "none", borderRadius: 8, padding: "0.3em 1em"
      }}>Dismiss</button>
    </div>
  );
}
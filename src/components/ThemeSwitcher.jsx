import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import Modal from "./ui/Modal";
import Button from "./ui/Button";

export default function ThemeSwitcher() {
  const { themeConf, setThemeType, setCustomTheme, getComplementary } = useTheme();
  const [modal, setModal] = useState(false);
  const [color, setColor] = useState("#f5f7fa");
  const [accent, setAccent] = useState("#3b82f6");

  function handleCustomSave() {
    setCustomTheme({ bg: color, accent });
    setModal(false);
  }

  return (
    <>
      <Button onClick={() => setModal(true)} aria-label="Theme settings">
        🎨
      </Button>
      <Modal open={modal} onClose={() => setModal(false)}>
        <h3>Theme Settings</h3>
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <Button onClick={() => { setThemeType("light"); setModal(false); }} style={{ background: "#f5f7fa", color: "#222" }}>Light</Button>
          <Button onClick={() => { setThemeType("grey"); setModal(false); }} style={{ background: "#2d2d2d", color: "#e0e0e0" }}>Grey</Button>
          <Button onClick={() => { setThemeType("dark"); setModal(false); }} style={{ background: "#181a1b", color: "#f5f7fa" }}>Dark</Button>
          <Button onClick={() => setThemeType("custom")} style={{ background: "#fff", color: "#222" }}>Custom</Button>
        </div>
        <div>
          <label>
            <span>Pick background color:</span>
            <input
              type="color"
              value={color}
              onChange={e => setColor(e.target.value)}
              style={{ marginLeft: 8, width: 32, height: 32, border: "none" }}
            />
          </label>
        </div>
        <div>
          <label>
            <span>Pick accent color:</span>
            <input
              type="color"
              value={accent}
              onChange={e => setAccent(e.target.value)}
              style={{ marginLeft: 8, width: 32, height: 32, border: "none" }}
            />
          </label>
        </div>
        <Button style={{ marginTop: 12 }} onClick={handleCustomSave}>Apply Custom</Button>
        <div style={{ fontSize: 13, color: "var(--color-muted)", marginTop: 10 }}>
          Text color, accent and others are auto-complemented for accessibility.
        </div>
      </Modal>
    </>
  );
}
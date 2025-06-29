import React, { createContext, useContext, useEffect, useState } from "react";

// Default themes
const THEMES = {
  light: {
    name: "light",
    bg: "#f5f7fa",
    fg: "#222",
    accent: "#3b82f6",
    muted: "#d1d5db",
    card: "#fff"
  },
  dark: {
    name: "dark",
    bg: "#181a1b",
    fg: "#f5f7fa",
    accent: "#60a5fa",
    muted: "#374151",
    card: "#23272a"
  },
  grey: {
    name: "grey",
    bg: "#2d2d2d",
    fg: "#e0e0e0",
    accent: "#bdbdbd",
    muted: "#565656",
    card: "#383838"
  }
};

const ThemeContext = createContext();

function getContrastYIQ(hexcolor) {
  // hexcolor: "#RRGGBB"
  let color = hexcolor.replace("#", "");
  if (color.length === 3) {
    color = color[0]+color[0]+color[1]+color[1]+color[2]+color[2];
  }
  const r = parseInt(color.substr(0,2),16);
  const g = parseInt(color.substr(2,2),16);
  const b = parseInt(color.substr(4,2),16);
  // YIQ formula
  const yiq = ((r*299)+(g*587)+(b*114))/1000;
  return yiq >= 128 ? "#222" : "#f5f7fa";
}

// Complementary color (180deg hue shift)
function getComplementary(hexcolor) {
  const color = hexcolor.replace("#", "");
  let num = parseInt(color, 16);
  let r = (num >> 16) & 0xFF;
  let g = (num >> 8) & 0xFF;
  let b = num & 0xFF;
  // Convert RGB to HSL
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r,g,b), min = Math.min(r,g,b);
  let h, s, l = (max+min)/2;
  if(max===min){ h = s = 0; }
  else {
    const d = max-min;
    s = l>0.5 ? d/(2-max-min) : d/(max+min);
    switch(max){
      case r: h = (g-b)/d + (g < b ? 6 : 0); break;
      case g: h = (b-r)/d + 2; break;
      case b: h = (r-g)/d + 4; break;
      default: h = 0;
    }
    h /= 6;
  }
  h = (h + 0.5) % 1; // 180deg
  // HSL to RGB
  function hue2rgb(p, q, t){
    if(t<0) t+=1;
    if(t>1) t-=1;
    if(t<1/6) return p+(q-p)*6*t;
    if(t<1/2) return q;
    if(t<2/3) return p+(q-p)*(2/3-t)*6;
    return p;
  }
  let q = l<0.5 ? l*(1+s) : l+s-l*s;
  let p = 2*l-q;
  let r2 = Math.round(hue2rgb(p,q,h+1/3)*255);
  let g2 = Math.round(hue2rgb(p,q,h)*255);
  let b2 = Math.round(hue2rgb(p,q,h-1/3)*255);
  return "#" + ((1<<24) + (r2<<16) + (g2<<8) + b2).toString(16).slice(1);
}

export function ThemeProvider({ children }) {
  // Saved format: {type: "light"|"dark"|"grey"|"custom", custom: {bg, fg, accent, ...}}
  const [themeConf, setThemeConf] = useState(() => {
    let saved = window.localStorage.getItem("themeConf");
    if(saved) return JSON.parse(saved);
    return { type: "light" };
  });

  // Calculate css vars for the theme
  function applyTheme(conf) {
    let vars = {};
    let t;
    if (conf.type === "custom" && conf.custom) {
      t = conf.custom;
      vars["--color-bg"] = t.bg;
      vars["--color-fg"] = getContrastYIQ(t.bg);
      vars["--color-accent"] = t.accent || getComplementary(t.bg);
      vars["--color-muted"] = t.muted || "#bdbdbd";
      vars["--color-card"] = t.card || t.bg;
      vars["--color-shadow"] = "rgba(0,0,0,0.09)";
    } else {
      t = THEMES[conf.type] || THEMES.light;
      vars["--color-bg"] = t.bg;
      vars["--color-fg"] = t.fg;
      vars["--color-accent"] = t.accent;
      vars["--color-muted"] = t.muted;
      vars["--color-card"] = t.card;
      vars["--color-shadow"] = "rgba(0,0,0,0.09)";
    }
    Object.entries(vars).forEach(([k, v]) => {
      document.documentElement.style.setProperty(k, v);
    });
  }

  useEffect(() => {
    applyTheme(themeConf);
    window.localStorage.setItem("themeConf", JSON.stringify(themeConf));
  }, [themeConf]);

  function setThemeType(type) {
    setThemeConf({type});
  }

  function setCustomTheme({ bg, accent, muted, card }) {
    setThemeConf({
      type: "custom",
      custom: {
        bg,
        accent: accent || getComplementary(bg),
        muted: muted || "#bdbdbd",
        card: card || bg
      }
    });
  }

  return (
    <ThemeContext.Provider value={{
      themeConf,
      setThemeType,
      setCustomTheme,
      getContrastYIQ,
      getComplementary
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
# NVC Emotional Toolkit

**Minimal Nonviolent Communication (NVC) coaching app, architected for modular growth into a full Emotional Quotient (EQ) toolkit. Includes a solidarity-based “buy me a coffee” module for donations and gentle support reminders.**

---

## ✨ Features

- **Modular design:** Core NVC step-by-step coach, feelings/needs selector, live rephraser, and journal.
- **Solidarity pay module:** Non-intrusive “Buy me a coffee” reminders with external payment links.
- **Easy extensibility:** Modules are self-contained for plug-and-play expansion (future EQ tools).
- **Privacy-first:** Data stored locally, with optional future backend sync.
- **Accessible, calming UI:** Designed for clarity, with light/dark modes.

---

## 🗂️ Project Structure

```
/src
  /modules
    /nvcCoach        # Core NVC guide (observation, feeling, need, request)
    /emotionLib      # Feelings & needs word bank
    /reflection      # Live feedback/rephraser
    /journal         # Conversation history
    /payment         # Solidarity pay/donation reminders
    /utils           # Shared helpers
  /components        # Shared UI components (inputs, buttons, modals)
  /services          # API/storage abstraction
  /hooks             # Shared React hooks
  App.jsx            # App root, router, module loader
  index.jsx          # Entry point
```

---

## 🚀 Goals

- **Approachable MVP** for NVC practice (interactive, feedback-rich, beginner-friendly)
- **Expandable foundation** for future EQ modules (empathy, self-reg, group chat, AI feedback, etc)
- **Solidarity-based funding** that is optional, gentle, and privacy-respecting

---

## 🛠️ Tech Stack

- React + Context API (or Redux)
- React Router (dynamic navigation/module loading)
- LocalStorage or IndexedDB for persistence
- External payment (Ko-fi, Open Collective, or crypto)

---

## 📝 Implementation Checklist

- [ ] NVC 4-step statement builder (prompt-by-prompt)
- [ ] Emotion & need selectors (search/filter)
- [ ] Live reflection/rephrasing of user input
- [ ] Conversation journal (save/review statements)
- [ ] Solidarity pay banner (gentle, links to external donation)
- [ ] Modular routing/folder structure for future modules
- [ ] Accessible, minimal UI (light/dark, keyboard, a11y)
- [ ] Clear onboarding for NVC basics

---

## 👩‍💻 Contributing

PRs and feedback welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 🧑‍🤝‍🧑 License

MIT — for a more emotionally intelligent web.  
Solidarity donations always optional, never required.

---

## 🌱 Future Modules (planned)

- Empathy training exercises
- Emotional vocabulary builder
- Self-regulation tools (breathing, mindfulness)
- Group chat with NVC prompts
- AI-powered coaching/feedback

---

**Built for growth, care, and community.**
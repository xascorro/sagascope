# SagaScope: Multi-Universe Speed Reader

**SagaScope** is an immersive reading speed analyzer that transports users into their favorite fictional universes. It measures your reading speed (WPM) and projects how long it would take you to read entire sagas, from *Harry Potter* to *Dune*.

https://github.com/user-attachments/assets/verify_reading_app_1769454091096

## 🌌 Features

*   **Multi-Universe Support**: Choose from 7 iconic sagas, each with unique visual themes and soundscapes (visual-only for now).
    *   *El Cosmere* (Stormlight Archive)
    *   *Harry Potter* (Wizarding World)
    *   *Lord of the Rings* (Middle-earth)
    *   *Reina Roja* (Madrid Noir)
    *   *Game of Thrones* (Westeros)
    *   *Dune* (Arrakis)
    *   *Hunger Games* (Panem)
*   **Immersive Themes**: Dynamic CSS variables and glassmorphism effects adapt the UI to match the selected universe.
*   **Reading Projections**: Calculates accurate reading times for every book in a saga based on your personal reading speed.
*   **Internationalization (i18n)**: Full support for English and Spanish.
*   **Modular Architecture**: Easily extensible design allowing for the addition of new sagas with zero core code changes.

## 🚀 How to Run

No server or installation is required! This is a pure static web application.

1.  Clone the repository.
2.  Open `index.html` in your favorite web browser.
3.  Start reading!

## 🛠️ Technologies

*   **HTML5**
*   **CSS3** (Variables, Flexbox, Grid, Animations)
*   **Vanilla JavaScript** (ES6+)
*   **Google Fonts**

## 📂 Project Structure

```
reading-speed-test/
├── core/               # Core application logic and styles
│   ├── script.js       # Main logic (router, calc, i18n)
│   └── style.css       # Global styles and layout
├── sagas/              # Modular saga definitions
│   ├── [saga_id]/      # Each saga is self-contained
│   │   ├── data.js     # Metadata, books, fragments
│   │   ├── style.css   # Theme overrides
│   │   └── assets/     # Backgrounds and images
└── index.html          # Entry point
```

## ✨ Credits

Developed as a showcase of advanced agentic coding capabilities.
Concepts and design inspired by the world's greatest stories.


# Cascadex Website – README

## 🚀 Project Overview
The **Cascadex Website** is a sleek, modern, and fully responsive single-page application built to showcase *Cascadex*—a fictional AI-powered automation tool. The site elegantly presents its key features, competitor comparisons, pricing tiers, testimonials, and a contact form, all wrapped in a dark, futuristic design.

![Homepage Preview](home.png)

---

## 🎨 Design Philosophy

Built with a forward-thinking approach, the design emphasizes:

- **💡 User Experience**  
  Clean layout, smooth scrolling, and a mobile-first responsive navbar ensure accessibility across all devices.

- **🌌 Visual Aesthetics**  
  A dark gradient background, neon accent colors (`#00f5d4`, `#7b2cbf`), and Orbitron/Inter font pairings create a futuristic feel. Tailwind CSS powers the layout, complemented by custom CSS for standout effects.

- **🎞️ Interactivity**  
  Scroll-based GSAP animations with ScrollTrigger elevate user engagement without compromising performance.

- **🧩 Modularity**  
  Content is abstracted into a `dataStore.js` file—mimicking an API—to allow easy updates and scalability.

---

## ⚙️ Core Features

### 🧭 1. Responsive Navigation
- Hamburger menu toggles on small screens.
- Smooth anchor-based scrolling.
- Flexbox-driven layout for cross-device compatibility.

### 🔄 2. Dynamic Content Injection
- `fetchUtils.js` simulates API calls to populate the site using `dataStore.js`.
- Lottie and SVG assets are dynamically loaded for enhanced visuals.

### 🧠 3. Interactive Components
- “Read More” toggle reveals detailed feature descriptions.
- A CSS-powered logo carousel adds visual movement.
- A comparison table shows feature parity with intuitive icons (✔️ ✖️ ➖).

### 🎬 4. Scroll & Hover Animations
- GSAP scroll-triggered animations add polish to hero and section transitions.
- Buttons and cards respond with subtle hover effects for tactile interactivity.

### 📝 5. Contact Form
- A glowing input-style contact form (front-end only) reinforces the tech theme.

---

## 🧱 Tech Stack

- **Frontend**: HTML5 + Tailwind CSS + custom `styles.css`
- **JavaScript**: Vanilla JS for interactivity and animations
- **Libraries**:
  - [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling
  - [GSAP + ScrollTrigger](https://greensock.com/scrolltrigger/) – Animations
  - [DotLottie Player](https://lottiefiles.com/dotlottie) – Lightweight animations
- **Fonts**:
  - [Orbitron](https://fonts.google.com/specimen/Orbitron) for headings
  - [Inter](https://fonts.google.com/specimen/Inter) for body text

---

## 🎓 Project Origin

This project was created as the final submission for the **"Web Design for Beginners"** course by the Department of Information Technology, Faculty of IT, University of Moratuwa (CODL). The goal was to apply newly acquired skills in HTML, CSS, and JavaScript to build a modern, responsive web application. *Cascadex*, though fictional, allowed me to demonstrate my creativity and ability to deliver an industry-aligned design and development experience.

---

## 🛠️ How to Run Locally

1. **Clone** the repository to your local machine.
2. **Open** `index.html` in any modern browser (no server setup required).
3. Ensure you have an **internet connection** for CDN-based assets (Tailwind, GSAP, DotLottie).

---

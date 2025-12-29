# Space Impact Vue 🚀👾

[![Live on Vercel](https://img.shields.io/badge/Vercel-Live-black?style=for-the-badge&logo=vercel)](https://space-impact-vue.vercel.app/)
[![Live on Render](https://img.shields.io/badge/Render-Live-black?style=for-the-badge&logo=render)](https://space-impact-vue.onrender.com)

<p align="center">
  <img src="public/img/logo.png" alt="Space Impact Logo" width="250"/>
</p>

### A modern remake of the classic Nokia Space Impact game, rebuilt from the ground up.

**Space Impact Vue** is a modular, class-based reconstruction of the iconic mobile game, integrated with **Vue 3**, **Vite**, and **Vanilla CSS**.

---

## ✨ Features

- 🎮 **Modular Game Engine**: Logic separated into Entities, Enemies, Environment, and Levels.
- 🌊 **Dynamic Level Management**: 8 authentic levels with unique enemy patterns and bosses.
- 📱 **Responsive Controls**: Full support for both keyboard and on-screen touch controls (enabled by default on mobile).
- 📟 **Retro Aesthetic**: Preserves the original look and feel of the classic Nokia 3310 game.

## 🕹️ Controls

| Action | Control |
| :--- | :--- |
| **Move** | Arrow Keys |
| **Fire** | Spacebar |
| **Special** | X Key (Missile, Laser, or Wall) |
| **Touch** | On-screen Buttons (Tap/Click) |

## 🛠️ Technology Stack

- **Framework**: [Vue 3](https://vuejs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (Fluid & Responsive)
- **Logic**: ES6 JavaScript (Class-based)

## 🏗️ Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 📜 Available Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the application for production |
| `npm run preview` | Previews the production build locally |

## 🧪 Project Structure

- `src/game/`: Core game logic.
  - `engine.js`: Orchestrates the game loop and level transitions.
  - `entities.js`: Player, Projectiles, and Special Attack classes.
  - `enemies.js`: All enemy types and the 8 Boss classes.
  - `environment.js`: Background layouts, UI overlays, and particles.
  - `levels.js`: Level-specific configurations and enemy spawn waves.
- `src/App.vue`: Main layout and game initialization.

---

Made with ❤️ by [Praveen](https://github.com/praveen-pravi6B) based on the original logic by **[sidsinr](https://github.com/sidsinr)**.

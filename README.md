# Space Impact Vue

A modern remake of the classic Nokia Space Impact game, rebuilt from the ground up using **Vue 3**, **Vite**, and **Vanilla CSS**.

> [!NOTE]
> This project is mainly for **educational purposes**, demonstrating how to refactor monolithic legacy JavaScript into a modular, class-based architecture integrated with a modern frontend framework like Vue.js.

## 🚀 Features
- **Modular Game Engine**: Logic separated into Entities, Enemies, Environment, and Levels.
- **Dynamic Level Management**: 8 authentic levels with unique enemy patterns and bosses.
- **Responsive Controls**: Full support for both keyboard and on-screen touch controls.
- **Retro Aesthetic**: Preserves the original look and feel of the classic Nokia 3310 game.

## 🕹️ Controls
- **Arrow Keys**: Move the ship
- **Spacebar**: Fire primary weapon
- **X Key**: Deploy special attack (Missile, Laser, or Wall)
- **On-screen Buttons**: Tap/click for touch-enabled devices.

## 🛠️ Project Structure
- `src/game/`: Core game logic.
  - `engine.js`: Orchestrates the game loop and level transitions.
  - `entities.js`: Player, Projectiles, and Special Attack classes.
  - `enemies.js`: All enemy types and the 8 Boss classes.
  - `environment.js`: Background layouts, UI overlays, and particles.
  - `levels.js`: Level-specific configurations and enemy spawn waves.
- `src/App.vue`: Main layout and game initialization.

## 👨‍💻 Credits
Original game logic and assets by **[sidsinr](https://github.com/sidsinr)** from the **[Space-Impact-Web](https://github.com/sidsinr/Space-Impact-Web)** repository.
Refactored and modularized for Vue 3 by **Praveen Kumar**.

> [!TIP]
> This project is mainly for **educational purposes**, demonstrating modern refactoring techniques for legacy JavaScript codebases.

## 🏗️ Getting Started

### Installation
```sh
npm install
```

### Development
```sh
npm run dev
```

### Build
```sh
npm run build
```

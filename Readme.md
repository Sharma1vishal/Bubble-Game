# 🎯 Bubble Hit Game

A fast-paced number-matching casual browser game built using **HTML, CSS, and Vanilla JavaScript**.  
You get a random target number, and your goal is to quickly pop the matching bubbles before the timer ends!

This project demonstrates DOM manipulation, event handling, game logic, responsive UI, and clean component-like structuring without using any frameworks.

---

## 🚀 Live Demo

( Add your deployed link here: Netlify / GitHub Pages / Vercel )

---

## 🕹️ Game Features

### ✅ **1. Real-Time Bubble Grid**

- 180 dynamically generated bubbles
- Each bubble contains a random number (1–50)
- Grid layout using CSS Grid
- Smooth hover animation

### ✅ **2. Hit Target Mechanism**

- A random “HIT” number is generated
- Player must pop the bubble that matches it
- New bubbles + new hit number appear on every correct hit

### ✅ **3. Score System**

- +10 points for correct hit
- −5 points for wrong hit
- Instant UI updates

### ✅ **4. Countdown Timer**

- 60-second game timer
- Automatic timeout → shows **Game Over** screen
- Timer resets correctly on game restart

### ✅ **5. Modal System**

- Start/Exit Game Modal
- Header Start/Exit controls
- UI-blocking modal with blur background

### ✅ **6. Game Lifecycle**

- `beganGame()` → starts everything
- `bubbleMaker()` → creates 180 bubbles
- `hitSet()` → sets the random target
- `scoreSet()` → updates score
- `gameReset()` → handles game over
- `exitNow()` → clean exit with reset

---

## 🧩 Folder Structure

# 🦆 Duck Hunt!: The Tile Guessing Game

Welcome to **Goose, Goose, Duck**, a web-based interactive tile guessing game where players try to find a hidden duck based on hot/cold proximity hints. It's a fun combination of memory, deduction, and duck facts!

Play at https://nickbournias.github.io/goose-goose-duck/

---

## 🎮 How to Play

1. **Choose a Grid Size (4x4, 5x5, or 6x6)**:
   - The size determines the difficulty level (Easy, Medium, Hard).

2. **Start Guessing**:
   - Click on tiles to guess where the duck is hidden.
   - Each guess gives you a proximity hint:
     - 🔥 “You’re Hot!” if you’re close
     - 🌤 “You’re Warm!” if you’re near
     - 🧊 “You’re Cold!” if you’re far away

3. **Find the Duck**:
   - If you guess the correct tile before running out of guesses, you win!
   - A popup will show the duck’s image and various info about the duck found.

4. **Track Your Wins**:
   - The last duck you have found will be shown at the bottom with a Google search link to learn more.

---

## 🧠 Game Features

- Dynamic grid generated based on selected width
- Each tile has a randomly styled background
- Real duck data pulled from `duckLibrary` (`ducks.js`)
- Proximity detection using Manhattan Distance
- Random fun facts on each win
- Difficulty levels that adjust your guess limit
- Clean visual feedback via Bootstrap-styled components

---

## 🛠️ Technologies Used

- JavaScript (ES6+)
- HTML5 & CSS3
- [Bootstrap 5](https://getbootstrap.com/)
- Hosted duck image assets from GitHub CDN

---

## 🔍 File Overview

- `script.js`: Main game logic (grid generation, guess tracking, popup display)
- `ducks.js`: Library of 20 duck species with name, image, scientific name, origin, features, and domestication status
- `index.html`: Front-end structure
- `/images/`: Tile and duck images

---

## 📦 How to Run Locally

1. Clone or download the repo
2. Make sure you have a simple HTTP server (like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code)
3. Open `index.html` in a browser using that server
4. Start hunting ducks!

---

## 📚 Example Duck Output

After winning a round, you'll see:

- 🖼 Image of the duck
- 🧬 Scientific name
- 🌍 Native region
- ✅ Domestication status
- 🌟 One unique feature

---

## 🧼 Resetting the Game

Click the “Reset” button or change grid size to start a new round with a different hidden duck.

---

## 👾 Future Enhancements

- Add timer-based scoring
- Sound effects (quacks, win/loss sounds)
- Leaderboard for multiple players

---

## 🦆 Special Thanks

All duck images and info are for educational and entertainment purposes. If you'd like to contribute more ducks, feel free to fork the repo and add your favorites!

---

**Happy Duck Hunting!**

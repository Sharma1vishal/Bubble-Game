const box = document.querySelector(".boxes");
const hitVal = document.querySelector(".hit");
const scoreVal = document.querySelector(".score");
const timerVal = document.querySelector(".timer");
const gameModal = document.querySelector(".modalBox");
const startGame = document.querySelector("#start");
const exitGame = document.querySelector("#leave");
const startBtn = document.querySelector("#startBtn");
const exitButton = document.querySelector("#exitBtn");

//Initial modal opening style prop
gameModal.style.display = "flex";

//Hit number generator----------------------------------------
function hitSet() {
  const hitNum = Math.floor(Math.random() * 50 + 1);
  hitVal.textContent = hitNum;
}

//timer function-----------------------------------------------
let time = 60;
function timer(end = false) {
  const interval = setInterval(() => {
    timerVal.textContent = time--;
    if (time <= 0 || end) {
      clearInterval(interval);
      // gameModal.style.display = "flex";
    }
  }, 1000);
}

//ScoreCard function---------------------------------------------
let scoreAdd = 0;
function scoreSet(correct) {
  if (correct) {
    scoreAdd += 10;
    hitSet();
    bubbleMaker();
  } else {
    scoreAdd -= 5;
  }
  scoreVal.textContent = scoreAdd;
  // if (scoreAdd < -15) gameReset();
}

//event hit on Box click, to match--------------------------------
box.addEventListener("click", (e) => {
  scoreSet(e.target.textContent == `${hitVal.textContent}`);
});

//Function to begin the game---------------------------------------
function beganGame() {
  gameModal.style.display = "none";
  bubbleMaker();
  hitSet();
  time = 60;
  scoreVal.textContent = 0;
  timer();
  startBtn.style.display = "none";
  exitButton.style.display = "flex";
}

//Events to start the game-------------------------------------------
startGame.addEventListener("click", (e) => beganGame());
startBtn.addEventListener("click", (e) => beganGame());

//Reset or Restart game function-------------------------------------
function gameReset() {
  hitVal.textContent = "?";
  timerVal.textContent = 0;
  time = 0;
  scoreVal.textContent = 0;
  box.innerHTML = `<h1 class='endScr'><strong>Gamer Over, Wanna Start a New Game</strong></h1>`;
}

// Exit Game---------------------------------------------------------
function exitNow() {
  gameReset();
  exitButton.style.display = "none";
  startBtn.style.display = "flex";
}

//event for exit game using header button-----------------------------
exitButton.addEventListener("click", () => {
  exitNow();
});

//event for exit game using Modal button------------------------------
exitGame.addEventListener("click", () => {
  gameModal.style.display = "none";
  exitNow();
});

//Box maker function--------------------------------------------------
function bubbleMaker() {
  let html = "";
  for (let i = 1; i <= 180; i++) {
    const num = Math.floor(Math.random() * 50) + 1;
    html += `<div class="bubble">${num}</div>`;
  }
  box.innerHTML = html;
}

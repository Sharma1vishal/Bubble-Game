const gamespace = document.querySelector(".gameSpace");
const box = document.querySelector(".boxes");
const hitVal = document.querySelector(".hit");
const scoreVal = document.querySelector(".score");
const timerVal = document.querySelector(".timer");

function hitSet() {
  const hitNum = Math.floor(Math.random() * 70 + 1);
  hitVal.textContent = hitNum;
}

function bubbleMaker() {
  let html = "";
  for (let i = 1; i <= 180; i++) {
    const num = Math.floor(Math.random() * 70) + 1;
    html += `<div class="bubble">${num}</div>`;
  }
  box.innerHTML = html;
}

bubbleMaker();

console.log(gamespace);

// get clickable elements for game
let els = document.querySelectorAll(".bounce_button");

// set vars for scope
let winningEl, winningNum;
let winCount = 0;

// handle click event function
function handleClick(e) {
  winCount++;
  console.log(`nice, your total win count is: ${winCount}`);
  reset();
}

// generate random number for game
function init() {
  winningNum = Math.trunc(Math.random() * 4) + 1;
  winningEl = els[winningNum - 1];
  winningEl.addEventListener("click", handleClick, false);
}

// reset game after correct guess
function reset() {
  winningEl.removeEventListener("click", handleClick, false);
  init();
}

// call function
init();

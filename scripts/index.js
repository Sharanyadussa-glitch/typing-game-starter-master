// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;

const timeBonus = { easy: 5, medium: 3, hard: 2 };
let difficulty = difficultySelect.value;

function addWordToDOM() {
  const index = Math.floor(Math.random() * words.length);
  randomWord = words[index];
  word.textContent = randomWord;
}

function updateScore() {
  score += 1;
  scoreEl.textContent = score;
}

function updateTime() {
  time -= 1;
  timeEl.textContent = `${time}s`;

  if (time === 0) {
    clearInterval(timer);
    gameOver();
  }
}

function gameOver() {
  text.disabled = true;

  const heading = document.createElement("h1");
  heading.textContent = "Time's up!";

  const finalScore = document.createElement("p");
  finalScore.textContent = `Final score: ${score}`;

  const restartButton = document.createElement("button");
  restartButton.textContent = "Play again";
  restartButton.addEventListener("click", () => location.reload());


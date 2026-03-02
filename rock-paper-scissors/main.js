// ===============================
// Welcome Page to Game Page Toggle
// ===============================
document.getElementById("continueBtn").addEventListener("click", () => {
  const gamePage = document.querySelector(".game-page");
  const welcomePage = document.querySelector(".welcome-page");

  gamePage.style.display = "flex";
  welcomePage.style.display = "none";
});

// ===============================
// Variables & Elements
// ===============================
let count = 0;
let yourScore = 0;
let aiScore = 0;

const countValue = document.getElementById("Count");
const buttons = document.querySelectorAll(".Countbtn");

const yourScoreElement = document.querySelector(".Yourscore");
const aiScoreElement = document.querySelector(".Aiscore");

const result = document.querySelector(".result");
const userSelect = document.querySelector(".UserSelect");
const aiSelect = document.querySelector(".Aiselect");

// ===============================
// Button Click = One Game Round
// ===============================
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Total Click Count
    count++;
    countValue.innerText = count;

    // Get Choices
    const userChoice = btn.innerText.toLowerCase();
    const aiChoice = generateAIChoice();

    // Show Choices on Screen
    userSelect.innerText = "You Choice: " + userChoice;
    aiSelect.innerText = "AI Choice: " + aiChoice;

    // ===============================
    // Compare Logic
    // ===============================
    if (userChoice === aiChoice) {
      result.innerText = "Draw";
      result.style.backgroundColor = "Orange";
      //msg hide after 3sec
      setTimeout(() => {
        result.innerText = "";
        result.style.backgroundColor = "";
      }, 3000);
    } else if (
      (userChoice === "rock" && aiChoice === "scissor") ||
      (userChoice === "paper" && aiChoice === "rock") ||
      (userChoice === "scissor" && aiChoice === "paper")
    ) {
      yourScore++;
      result.innerText = "You Win ";
      result.style.backgroundColor = "green";
        //msg hide after 3sec
      setTimeout(() => {
        result.innerText = "";
        result.style.backgroundColor = "";
      }, 3000);
    } else {
      aiScore++;
      result.innerText = "You Lose ";
      result.style.backgroundColor = "red";
        //msg hide after 3sec
      setTimeout(() => {
        result.innerText = "";
        result.style.backgroundColor = "";
      }, 3000);
    }

    yourScoreElement.innerText = yourScore;
    aiScoreElement.innerText = aiScore;
  });
});

// ===============================
// AI Random Choice Generator
// ===============================
function generateAIChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

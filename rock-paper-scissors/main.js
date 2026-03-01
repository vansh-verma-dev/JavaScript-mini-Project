document.getElementById("continueBtn").addEventListener("click", () => {

  const GamePage = document.querySelector(".game-page");
  const WelcomePage = document.querySelector(".welcome-page");

  GamePage.style.display = "block";
  WelcomePage.style.display = "none";
});

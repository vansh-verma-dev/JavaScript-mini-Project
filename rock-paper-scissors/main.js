document.getElementById("continueBtn").addEventListener("click", () => {
  const GamePage = document.querySelector(".game-page");
  const WelcomePage = document.querySelector(".welcome-page");

  GamePage.style.display = "flex";
  WelcomePage.style.display = "none";
});
count = 0;
const Countbtn = document.querySelectorAll(".Countbtn");
Countbtn.forEach((btn)=>{
btn.addEventListener("click", () => {
  let countvalue = document.getElementById("Count");
  count++;
  countvalue.innerText = count;
})

});

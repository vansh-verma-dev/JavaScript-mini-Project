
//welcome page & game-page toggle
document.getElementById("continueBtn").addEventListener("click", () => {
  const GamePage = document.querySelector(".game-page");
  const WelcomePage = document.querySelector(".welcome-page");

  GamePage.style.display = "flex";
  WelcomePage.style.display = "none";
});

//All btn click add Totla count 
count = 0;

const Countbtn = document.querySelectorAll(".Countbtn");
Countbtn.forEach((btn)=>{
btn.addEventListener("click", () => {
  let countvalue = document.getElementById("Count");

  count++;
  countvalue.innerText = count;
})
});

//User Choice Btn 
Countbtn.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    const UserChoice = btn.innerText.toLowerCase();
    playGame(UserChoice);
  })

})

const UserSelect = document.querySelector('.UserSelect');
const Aiselect = document.querySelector('.Aiselect');
// print user choice 
function playGame(Choice){
console.log("User :", Choice);
UserSelect.innerHTML = "You Choice:  " + Choice;
  Aiselect.innerHTML = "Ai Choice: "+Aigenrate();
 
}

// choice Ai 

function Aigenrate(){
  let AiChoices = ['rock', 'paper' , 'scissor']
  let randamChoices = Math.floor(Math.random() *3);
   return  AiChoices[randamChoices];
}



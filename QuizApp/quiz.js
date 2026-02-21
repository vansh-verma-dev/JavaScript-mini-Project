const questions = [
    {
        question: "HTML ka full form kya hai?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks Text Mark",
            "Hyper Tool Multi Language"
        ],
        answer: 0
    },
    {
        question: "CSS kis kaam ke liye use hota hai?",
        options: [
            "Structure",
            "Styling",
            "Database",
            "Server"
        ],
        answer: 1
    },
    {
        question: "JavaScript kaha run hota hai?",
        options: [
            "Server",
            "Browser",
            "Database",
            "Photoshop"
        ],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.querySelectorAll("input[name='option']");
const resultEl = document.getElementById("result");

const msg = document.querySelector('.errormsg');
const deletbtn = document.querySelector('.deletebtn');

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.innerText = q.question;

    document.getElementById("opt0").innerText = q.options[0];
    document.getElementById("opt1").innerText = q.options[1];
    document.getElementById("opt2").innerText = q.options[2];
    document.getElementById("opt3").innerText = q.options[3];

    optionsEl.forEach(option => option.checked = false);
}

document.getElementById("nextBtn").addEventListener("click", () => {
    let selected = -1;

    optionsEl.forEach(option => {
        if (option.checked) {
            selected = parseInt(option.value);
        }
    });

    if (selected === -1) {
        // alert("Please select an option!");
        msg.style.display="flex";
        return;
    }
    deletbtn.addEventListener('click',()=>{
        msg.style.display="none"
    })

    if (selected === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionEl.innerText = "Quiz Finished!";
        document.querySelector(".options").style.display = "none";
        document.querySelector(".buttons").style.display = "none";
        resultEl.innerText = `Your Score: ${score} / ${questions.length}`;
    }
});

document.getElementById("resetBtn").addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    document.querySelector(".options").style.display = "block";
    document.querySelector(".buttons").style.display = "flex";
    resultEl.innerText = "";
    loadQuestion();
});

loadQuestion();
console.log('create a quiz app');

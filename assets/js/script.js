const questions = [
    {
        question: "Commonly used data types do not include:",
        options: ["strings","booleans","alerts","numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        options:["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer:"parenthesis"
    },
    {
        question: "Arrays in javascript can be used to store _______.",
        options:["number and strings", "other arrays", "booleans", "all of the above"],
        answer:"all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        options:["commas","curly brackets", "quotes", "parenthesis"],
        answer:"curly brackets"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options:["JavaScript","terminal/bash","for loops","console.log"],
        answer:"for loops"
    }
];

const startButton = document.getElementById("start-btn");
const questionDisplay = document.getElementById("question");
const answers = document.querySelectorAll(".answer");
const questionContainer = document.getElementById("question-container");
const timeElement = document.getElementById("timer");
const gameOver = document.getElementById("game-over");
const submitButton = document.getElementById("submit-score");
const initialsInput = document.getElementById("initials");
const highScoresButton = document.getElementById("view-high-scores");
const highScoresDisplay = document.getElementById("high-scores");
const welcomeScreen = document.getElementById("welcome-screen");
const gameOverScreen = document.getElementById("game-over");

let currentQuestionIndex = 0;
let time = 75;
let timer;

startButton.addEventListener("click", startQuiz);
questionContainer.addEventListener("click", handleAnswer);

function startQuiz() {
  welcomeScreen.style.display = "none";
  questionContainer.style.display = "block";
  timer = setInterval(function() {
    time--;
    timeElement.textContent = "Time: " + time;

    if (time <= 0) {
      endQuiz();
    }
  }, 1000);
  displayQuestion();
}

function displayQuestion() {
  if (currentQuestionIndex >= questions.length) {
    endQuiz();
    return;
  }

  const question = questions[currentQuestionIndex];
  questionDisplay.textContent = question.question;
  answers.forEach((button, index) => {
    button.textContent = question.options[index];
  });
}
let correctAnswers = 0;

function handleAnswer(e) {
    if (e.target.classList.contains("answer")) {
      const selectedIndex = Array.from(answers).indexOf(e.target);
      const correctAnswer = questions[currentQuestionIndex].answer;
      const selectedOption = questions[currentQuestionIndex].options[selectedIndex];

      if (selectedOption === correctAnswer) {
        correctAnswers++;
      } else {
        
        time -= 5;
     
        if (time < 0) time = 0;
      }
  
      currentQuestionIndex++;
      displayQuestion();
    }
  }
  

function endQuiz() {
  
  clearInterval(timer);
  questionContainer.style.display = "none";
  gameOver.style.display = "block";
  document.getElementById("final-score").textContent = "You answered " + correctAnswers + " questions correctly!";
}




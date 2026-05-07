const questions = [
  { text: "Question 1: Do you enjoy helping others?", choices: ["Yes", "No"], value: [1, 0] },
  { text: "Question 2: Are you calm under pressure?", choices: ["Yes", "No"], value: [1, 0] },
  { text: "Question 3: Do you want to learn new skills?", choices: ["Yes", "No"], value: [1, 0] },
  { text: "Question 4: Are you interested in trauma therapy?", choices: ["Yes", "No"], value: [1, 0] },
  { text: "Question 5: Would you recommend therapy to others?", choices: ["Yes", "No"], value: [1, 0] },
];

let currentQuestion = 0;
let score = 0;

const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const progressText = document.getElementById("progress-text");
const resultText = document.getElementById("result-text");

document.getElementById("start-btn").addEventListener("click", () => {
  startScreen.classList.add("hidden");
  questionScreen.classList.remove("hidden");
  displayQuestion();
});

document.getElementById("next-btn").addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    showResult();
  }
});

document.getElementById("restart-btn").addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
});

function displayQuestion() {
  const question = questions[currentQuestion];
  questionText.textContent = question.text;
  choicesContainer.innerHTML = "";

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () => {
      score += question.value[index];
      document.getElementById("next-btn").disabled = false;
    });
    choicesContainer.appendChild(button);
  });

  progressText.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  document.getElementById("next-btn").disabled = true;
}

function showResult() {
  questionScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  
  if (score >= 3) {
    resultText.textContent = "The TRM Model is perfect for you!";
  } else {
    resultText.textContent = "The TRM Model might not be the best fit for you.";
  }
}

const questions = [
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Jupiter", correct: false },
        { text: "Mars", correct: true },
        { text: "Earth", correct: false },
      ],
    },
    {
      question: "What is 2+2?",
      answers: [
        { text: "4", correct: true },
        { text: "6", correct: false },
        { text: "10", correct: false },
      ],
    },
    {
      question: "Which animal is known as the king of the jungle?",
      answers: [
        { text: "Tiger", correct: false },
        { text: "Lion", correct: true },
        { text: "Cheetah", correct: false },
      ],
    },
  ];
  
  let currentQuestionIndex = 0;
  
  const questionElement = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-button");
  const nextButton = document.getElementById("next-btn");
  
  function showQuestion() {
    // Display the question
    questionElement.innerText = questions[currentQuestionIndex].question;
  
    // Display the answers
    answerButtonsElement.innerHTML = ""; // Clear previous answers
    questions[currentQuestionIndex].answers.forEach((answer) => {
      const button = document.createElement("button");
      button.classList.add("btn");
      button.innerText = answer.text;
      button.addEventListener("click", () => selectAnswer(button, answer.correct));
      answerButtonsElement.appendChild(button);
    });
  }
  
  function selectAnswer(button, isCorrect) {
    // Highlight correct/incorrect answer
    if (isCorrect) {
      button.style.backgroundColor = "green";
    } else {
      button.style.backgroundColor = "red";
    }
  
    // Disable all buttons after an answer is selected
    Array.from(answerButtonsElement.children).forEach((btn) => {
      btn.disabled = true;
      if (btn.innerText === questions[currentQuestionIndex].answers.find(a => a.correct).text) {
        btn.style.backgroundColor = "green"; // Highlight correct answer
      }
    });
  
    nextButton.style.display = "block"; // Show the Next button
  }
  
  function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
      nextButton.style.display = "none"; // Hide the Next button
    } else {
      questionElement.innerText = "Quiz Finished!";
      answerButtonsElement.innerHTML = ""; // Clear answers
      nextButton.style.display = "none"; // Hide the Next button
    }
  }
  
  // Event listener for the Next button
  nextButton.addEventListener("click", showNextQuestion);
  
  // Initialize the quiz
  showQuestion();
  
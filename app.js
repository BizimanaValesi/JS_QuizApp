let currentQuestionIndex = 0;
let score = 0; // Initializing score

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const currentQuestion = quiz_Questions[currentQuestionIndex];
    // Updated to show current question number out of total questions
    questionElement.innerText = `${currentQuestionIndex + 1}/${quiz_Questions.length}. ${currentQuestion.question}`;
}

function checkAnswer(userAnswer) {
    const correctAnswer = quiz_Questions[currentQuestionIndex].answer;
    const answerElement = document.getElementById('answer');
    if (userAnswer === correctAnswer) {
        answerElement.innerText = "Correct!";
        score++; // Incrementing  score if answer is correct
    } else {
        answerElement.innerText = "Incorrect!";
    }
    setTimeout(() => {
        currentQuestionIndex++;
        if(currentQuestionIndex < quiz_Questions.length) {
            displayQuestion();
            answerElement.innerText = "";
        } else {
            // Updated to show final score out of total questions
            document.getElementById('quiz-container').innerHTML = `<div id="score">Your score: ${score}/${quiz_Questions.length}</div><button id="restart">Restart</button>`;
            document.getElementById('restart').addEventListener('click', restartQuiz);
        }
    }, 2000);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-container').innerHTML = `
        <div id="question"></div>
        <button id="true">True</button>
        <button id="false">False</button>
        <div id="answer"></div>
    `;
    document.getElementById('true').addEventListener('click', () => checkAnswer(true));
    document.getElementById('false').addEventListener('click', () => checkAnswer(false));
    displayQuestion();
}

document.getElementById('true').addEventListener('click', () => checkAnswer(true));
document.getElementById('false').addEventListener('click', () => checkAnswer(false));

window.onload = displayQuestion;

var quiz = [
    {
        question: '1. Commonly used data types DO Not Include:',
        answers: ['strings', 'booleans', 'alerts', 'numbers'],
        correctAnswer: 'booleans'
    },
    {
        question: '2. The condition in an if / else statement is enclosed with?',
        answers: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        correctAnswer: 'parenthesis'
    },
    {
        question: '3. Arrays in JavaScript can be used to store?',
        answers: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        correctAnswer: 'all of the above'
    },
    {
        question: '4. A very useful tool used during development and debugging for printing content to the debugger is?',
        answers: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        correctAnswer: 'console.log'
    }
];



let i = 0
let timeLeft = 30

document.getElementById('startBtn').onclick = function () {
    startQuiz();
    setInterval(function () {

        if (timeLeft >= 0) {
            document.getElementById('time').innerHTML = `
        <h2>Time Left: </h2>
        <h2>${timeLeft}</h2>`;
            timeLeft--;
        }
    }, 1000)

}
// function for starting quiz
function startQuiz() {
    if (i < quiz.length ) {

        document.getElementById('questions').innerHTML = `
        <h3>${quiz[i].question}</h3>
        <div>
        <button>${quiz[i].answers[0]}</button>
        <button>${quiz[i].answers[1]}</button>
        <button>${quiz[i].answers[2]}</button>
        <button>${quiz[i].answers[3]}</button>
        </div>
        `;
    } else {
        document.getElementById('questions').innerHTML = `
        <h3>You have completed the quiz!</h3>
        `;
    }
}
//questions ID
document.getElementById('questions').onclick = function (e) {
    console.log(e.target.innerText)
    var answer = e.target.innerText;
    if (answer === quiz[i].correctAnswer) {
        document.getElementById('showCorrect').innerHTML = `
    <h3>Correct!</h3>`
    } else {
        document.getElementById('showCorrect').innerHTML = `
    <h3>Wrong!</h3>`
    timeLeft -=5
    }
    setTimeout(function () {
        document.getElementById('showCorrect').innerHTML = '';
        i++;
        checkTime()

    }, 500)

}
//time limit
function checkTime() {

    if (timeLeft >= 0) {
        startQuiz()
    } else {
        document.getElementById('questions').innerHTML = `
        <h3>You are running out of time!</h3>`
    }
}

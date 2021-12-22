console.log("hello world!");

// Variables
const startButton = document.getElementById("start-button");
const questionText = document.getElementById("question-text");
const answerOne = document.getElementById("answer-1");
const answerTwo = document.getElementById("answer-2");
const answerThree = document.getElementById("answer-3");
const answerFour = document.getElementById("answer-4");
const questionContainer = document.getElementById("question-container");
const startContainer = document.getElementById("start-container");
const endBackground = document.getElementById("end-background");
const endContainer = document.getElementById("end-container");
const endResult = document.getElementById("end-result");
const endText = document.getElementById("end-text");
const endButton = document.getElementById("end-button");

// Custom variables
var shuffledQuestions = 1
var currentQuestionIndex = 1
var r = 0
var s = 0
var g = 0
var h = 0
const questions = [
    {
        question: 'What is your favorite color?',
        answers: [
            { text: 'Blue', group: 'r' },
            { text: 'Green', group: 's' },
            { text: 'Red', group: 'g' },
            { text: 'Yellow', group: 'h' },
        ]
    },
    {
        question: 'Which adjective best describes you?',
        answers: [
            { text: 'Smart', group: 'r' },
            { text: 'Evil', group: 's' },
            { text: 'Strong', group: 'g' },
            { text: 'Loyal', group: 'h' },
        ]
    },
    {
        question: 'Where would you most want to go on vacation?',
        answers: [
            { text: 'Antarctica', group: 'g' },
            { text: 'South Africa', group: 'h' },
            { text: 'New York', group: 's' },
            { text: 'London', group: 'r' },
        ]
    },
    {
        question: 'What activity do you enjoy most?',
        answers: [
            { text: 'Making Evil Plans', group: 's' },
            { text: 'Hiking', group: 'h' },
            { text: 'Reading', group: 'r' },
            { text: 'Sports', group: 'g' },
        ]
    },
    {
        question: 'Which house do you want to be in?',
        answers: [
            { text: 'Gryffindor', group: 'r' },
            { text: 'Ravenclaw', group: 's' },
            { text: 'Hufflepuff', group: 'g' },
            { text: 'Slytherin', group: 'h' },
        ]
    }
]

// Event listeners
startButton.addEventListener("click", startQuiz);
answerOne.addEventListener("click", goToNextQuestion);
answerTwo.addEventListener("click", goToNextQuestion);
answerThree.addEventListener("click", goToNextQuestion);
answerFour.addEventListener("click", goToNextQuestion);
endButton.addEventListener("click", startOver);


// Functions

function startQuiz () {
    startContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion () {

    questionText.innerText = questions[currentQuestionIndex].question

    answerOne.classList.remove('r');
    answerTwo.classList.remove('r');
    answerThree.classList.remove('r');
    answerFour.classList.remove('r');

    answerOne.classList.remove('g');
    answerTwo.classList.remove('g');
    answerThree.classList.remove('g');
    answerFour.classList.remove('g');

    answerOne.classList.remove('h');
    answerTwo.classList.remove('h');
    answerThree.classList.remove('h');
    answerFour.classList.remove('h');

    answerOne.classList.remove('s');
    answerTwo.classList.remove('s');
    answerThree.classList.remove('s');
    answerFour.classList.remove('s');

    answerOne.innerText = questions[currentQuestionIndex]["answers"][0]['text']
    answerTwo.innerText = questions[currentQuestionIndex]["answers"][1]['text']
    answerThree.innerText = questions[currentQuestionIndex]["answers"][2]['text']
    answerFour.innerText = questions[currentQuestionIndex]["answers"][3]['text']

    answerOne.classList.add(questions[currentQuestionIndex]["answers"][0]['group']);
    answerTwo.classList.add(questions[currentQuestionIndex]["answers"][1]['group']);
    answerThree.classList.add(questions[currentQuestionIndex]["answers"][2]['group']);
    answerFour.classList.add(questions[currentQuestionIndex]["answers"][3]['group']);
}

function goToNextQuestion(e) {
    currentQuestionIndex = currentQuestionIndex + 1;
    console.log(e.target);
    target = e.target
    if (target.classList.contains('r')) {
        r = r + 1
    } else if (target.classList.contains('s')){
        s = s + 1
    } else if (target.classList.contains('h')){
        h = h + 1
    } else if (target.classList.contains('g')){
        g = g + 1
    }
    console.log(r, s, h, g);
    if (currentQuestionIndex + 1 > questions.length) {
        endContainer.classList.remove("hidden");
        questionContainer.classList.add("hidden");
        showResults();
    } else
        setNextQuestion()
}

function showResults() {
    if (g === Math.max(r,s,g,h)) {
        endBackground.classList.add("bg-red-900")
        endResult.innerText = "You are a Gryffindor!"
        endText.innerText = "You are a brave soul."
    } else if (r === Math.max(r,s,g,h)) {
        endBackground.classList.add("bg-blue-800")
        endResult.innerText = "You are a Ravenclaw!"
        endText.innerText = "You are a smart soul."
    } else if (h === Math.max(r,s,g,h)) {
        endBackground.classList.add("bg-orange-400")
        endResult.innerText = "You are a Hufflepuff!"
        endText.innerText = "You are a loyal soul."
    } else if (s === Math.max(r,s,g,h)) {
        endBackground.classList.add("bg-green-800")
        endResult.innerText = "You are a Slytherin!"
        endText.innerText = "You are an evil soul."
    }
}

function startOver() {
    startContainer.classList.remove('hidden');
    endContainer.classList.add('hidden');
    endBackground.classList.remove("bg-green-800");
    endBackground.classList.remove("bg-red-900");
    endBackground.classList.remove("bg-blue-800");
    endBackground.classList.remove("bg-orange-400");
    r = 0
    s = 0
    g = 0
    h = 0
}
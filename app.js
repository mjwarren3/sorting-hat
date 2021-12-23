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
const statusBar = document.getElementById("status-bar");
const endImage = document.getElementById("end-image");
const startOverButton = document.getElementById("start-over");

// Custom variables
var shuffledQuestions = 1
var currentQuestionIndex = 1
var r = 0
var s = 0
var g = 0
var h = 0
const questions = [
    {
        question: 'Which subject did you excel at most in school?',
        answers: [
            { text: 'History', group: 'h' },
            { text: 'Math', group: 's' },
            { text: 'Science', group: 'r' },
            { text: 'Phys Ed', group: 'g' },
        ]
    },
    {
        question: 'Which word would your friends use to describe you?',
        answers: [
            { text: 'Smart', group: 'r' },
            { text: 'Courageous', group: 'g' },
            { text: 'Ambitious', group: 's' },
            { text: 'Kind', group: 'h' },
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
        question: 'What activity do you enjoy doing most?',
        answers: [
            { text: 'Learning a New Skill', group: 's' },
            { text: 'Hiking a Mountain', group: 'h' },
            { text: 'Reading a Book', group: 'r' },
            { text: 'Playing Sports', group: 'g' },
        ]
    },
    {
        question: 'Which Hogwarts house do you want to be in?',
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
startOverButton.addEventListener("click", startOver);


// Functions

function startQuiz () {
    startContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    currentQuestionIndex = 0;
    statusBar.classList.remove("w-5/6");
    statusBar.classList.add("w-"+(currentQuestionIndex+1)+"/6");
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
    statusBar.classList.remove("w-"+(currentQuestionIndex+1)+"/6");
    currentQuestionIndex = currentQuestionIndex + 1;
    statusBar.classList.add("w-"+(currentQuestionIndex+1)+"/6");
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
    endBackground.classList.remove("bg-green-800");
    endBackground.classList.remove("bg-red-900");
    endBackground.classList.remove("bg-blue-800");
    endBackground.classList.remove("bg-black");
    if (g === Math.max(r,s,g,h)) {
        endBackground.classList.add("bg-red-900")
        endResult.innerText = "You are a Gryffindor!"
        endText.innerText = "Gryffindors are associated with daring, bravery, nerve and chivalry. Gryffindors can also be cocky and restless."
        endImage.src = "./gryff.png"
    } else if (r === Math.max(r,s,g,h)) {
        endBackground.classList.add("bg-blue-800")
        endResult.innerText = "You are a Ravenclaw!"
        endText.innerText = "Ravenclaws possess the traits of cleverness, wisdom, wit, intellectual ability and creativity."
        endImage.src = "./rave.png"
    } else if (h === Math.max(r,s,g,h)) {
        endBackground.classList.add("bg-black")
        endResult.innerText = "You are a Hufflepuff!"
        endText.innerText = "Hufflepuff characteristics include a strong sense of justice, loyalty, patience, and a propensity for hard work. Hufflepuffs are also seen as nice, almost to a fault."
        endImage.src = "./huff.png"
    } else if (s === Math.max(r,s,g,h)) {
        endBackground.classList.add("bg-green-800")
        endResult.innerText = "You are a Slytherin!"
        endText.innerText = "Slytherins tended to be ambitious, shrewd, cunning, strong leaders, and achievement-oriented."
        endImage.src = "./slyth.png"
    }
}

function startOver() {
    
    startContainer.classList.remove('hidden');
    endContainer.classList.add('hidden');
    endBackground.classList.remove("bg-green-800");
    endBackground.classList.remove("bg-red-900");
    endBackground.classList.remove("bg-blue-800");
    endBackground.classList.remove("bg-black");
    r = 0
    s = 0
    g = 0
    h = 0
}
let start = document.querySelector("#start-test");
let questionAsk = document.querySelector("#question")
let choices= document.querySelector("#answer-choices");

let option1 = document.createElement("button");
let option2 = document.createElement("button");
let option3 = document.createElement("button");
let option4 = document.createElement("button");

let i = 0

let allQuestions = [
    "Commonly used data types DO NOT include:", 
    "The conditions in an if/else statement is enclosed within ______.",
    "Arrays in JavaScript can be used to store  ______.",
    "String values must be enclosed within _____ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing to the debugger is:",
];

let options = [
    [
        "1. strings", 
        "2. booleans",
        "3. alerts", 
        "4. numbers",
    ],

    [
        "1. quotes", 
        "2. curly brackets",
        "3. parenthesis",
        "4. square brackets",
    ],

    [
        "1. numbers and strings", 
        "2. other arrays",
        "3. booleans",
        "4. all of the above",
    ],

    [
        "1. commas", 
        "2. curly brackets",
        "3. quotes",
        "4. parenthesis",
    ],

    [
        "1. JavaScript", 
        "2. terminal/bash",
        "3. for loops",
        "4. console.log",
    ],
];

option1.textContent = options[0][0];
option2.textContent = options[0][1];
option3.textContent = options[0][2];
option4.textContent = options[0][3];

option1.addEventListener("click", function() {
    nextQ();
    nextA();
});

option2.addEventListener("click", function() {
    nextQ();
    nextA();
});

option3.addEventListener("click", function() {
    nextQ();
    nextA();
});

option4.addEventListener("click", function() {
    nextQ();
    nextA();
});

// sets the original question and answer choices values
function startQ() {
    questionAsk.textContent = allQuestions[0];
};

function startA() {
    choices.appendChild(option1);
    choices.appendChild(option2);
    choices.appendChild(option3);
    choices.appendChild(option4);

    i++;
    console.log(i);
}; 

start.addEventListener("click", function() {
    choices.textContent = "";
    document.getElementById("start-test").classList.add("hide");
    // startTimer();
    startQ();
    startA();
});

//rotating through the remaining questions and answers
function nextQ() {
    questionAsk.textContent = allQuestions[i];
};

function nextA() {
    // once the final question is answered i need the area asking questions to change to a <p> that tells the palyer to enter therir intials followed byt a textbox input for them to do so in. also ned a submit button added that will change the stuff again to the page diaplying all of the previous highscores 
    if(i > options.length - 1) {
        // let enterI = document.createElement("p");
        // let enterInitialBox = createElement("input");

        questionAsk.textContent = "All done!";
        choices.textContent = "Your final score is: "
    };

    option1.textContent = options[i][0];
    option2.textContent = options[i][1];
    option3.textContent = options[i][2];
    option4.textContent = options[i][3];

    i++
};






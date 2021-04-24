var timeEl = document.querySelector(".timer");
var question = document.querySelector("h1");
var test = document.querySelector(".test");
var answer = document.querySelector(".answer");
var content = document.querySelector(".content");
var buttonStart = "Start Quiz";
var theButton;
var buttonList = ["1. ", "2. ", "3. ", "4. "];
var button = [];
var secondsLeft = 90;
var questionNo = 0;
var response = "";
var status = "";
divTemp = "";

quiz = [{
    question: "Commonly used data types DO NOT include:",
    ans: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    key: 2,
},{
    question: "The condition in an if / else statement is enclosed within _____.",
    ans: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
    key: 2,
},{
    question: "Arrays in JavaScript can be used to store _____.",
    ans: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    key: 3,
},{
    question: "String values must be enclosed within ______ when being assigned to variables.",
    ans: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    key: 2,
},{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    ans: ["1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log"],
    key: 3,
}];

function init(){
    test.children[0].textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!";

    let theButton = document.createElement("button");
    // answer.append(theButton);
    theButton.append(buttonStart);
    answer.append(theButton);
    answer.children[0].setAttribute("data-no", "start");
    
    answer.addEventListener("click",function(event){
        event.preventDefault();
    
        var element = event.target;

        if (element.matches("button")) {
            console.log(event);

            var type = element.getAttribute("data-no");
            if ( type === "start"){
                console.log(type);
                startQuiz();
            } else {
                // else question answered
                console.log(type);
                gradeQuestion(event);
            }
        }
    });

}

function startQuiz (){
    console.log("Quiz Started!");
    //Start timer
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);

    askQuestion();
}

function askQuestion(status) {

    question.textContent = quiz[questionNo]["question"];

    test.children[0].textContent = "";
 
    for (var i = 0; i < answer.children.length; i++){
        answer.children[i].textContent = "";
    }
    answer.setAttribute("style", "align-items: baseline;");

    var buttonCount = answer.children.length;
    for (var i = 0; i < buttonCount; i++){
        var el = document.querySelector("button");
        el.remove();
    }

    for (var i = 0; i < 4; i++){
        button[i] = document.createElement("button");
        answer.append(button[i]);
        answer.children[i].textContent = quiz[questionNo]["ans"][i];
        answer.children[i].setAttribute("data-no", i);
        answer.children[i].setAttribute("data-question", questionNo);
    }

    if (status) {
        divTemp = document.createElement("div");
        divTemp.className = "temp";
        // divTemp.append("<hr>");
        divTemp.append(status);

        test.append(divTemp);
        var timeoutID = window.setTimeout(function() {
            divTemp.remove();            
        }, 2*1000);

    }
}

function gradeQuestion(event){
    response = event.target.getAttribute("data-no");
    questionNo = event.target.getAttribute("data-question");
    key = quiz[questionNo]["key"];

    if ( response != key){
        // Response is wrong
        secondsLeft -= 10;
        status = "Wrong!";
    } else { 
        status = "Right!";
    }

    if (questionNo < quiz.length){
        questionNo ++;
        askQuestion(status);
    } else {
        clearInterval(timerInterval);
        endQuiz();
    }


}

function endQuiz(){
    // Things to do when the quiz timer runs out
}

init();
var timeEl = document.querySelector(".timer");
var question = document.querySelector(".question");
var answer = document.querySelector(".answer");
var buttonStart = "Start Quiz";
var theButton;
var buttonList = ["1. ", "2. ", "3. ", "4. "];
var buttonListener = [];
var secondsLeft = 90;
var questionNo = 0;

quiz = {
    question: ["question 1", "question 2"],
    ans: ["ans 1", "ans 2"],
    w1: ["w1 1", "w1 2"],
    w2: ["w2 1", "w2 2"],
    w3: ["w3 1", "w3 2"],
};

function init(){
    question.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!";

    // var button = document.createElement("button");

    let theButton = document.createElement("button");
    answer.append(theButton);
    theButton.append(buttonStart);
 
    
    theButton.addEventListener("click",function(event){
        event.preventDefault();
        console.log(event);

        startQuiz();
    });

}

function startQuiz (){
    console.log("Quiz Started!");
    //Start timer
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);

    askQuestion();
}

function askQuestion() {
    if ( questionNo === 0) {
        answer.textContent = "";
        for (var i; i < 4; i++){
        let theButtonListener[i] = document.createElement("button");
        answer.append(theButtonListener[i]);
        theButton.append(quiz["ans"][questionNo]);
     
        
        theButtonListener[i].addEventListener("click",function(event){
            event.preventDefault();
            console.log(event);
        
            // mark wrong or correct
            // ask next question
        }
        
    

    }
    
        question.textContent = quiz["question"][questionNo];
        // answer.children[0].textContent = quiz["ans"][questionNo];
        // for(var i = 1; i < 4; i++){
        //     answer.append(theButton);
        //     answer.children[i].textContent = quiz["w"+ i][questionNo];
        // }




}

function endQuiz(){
    // Things to do when the quiz timer runs out
}

init();
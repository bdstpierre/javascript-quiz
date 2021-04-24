var timeEl = document.querySelector(".timer");
var question = document.querySelector(".question");
var answer = document.querySelector(".answer");
var buttonList = ["Start Quiz"];
var buttonListener = [];

function init(){
    question.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!";

    // var button = document.createElement("button");

    let theButton = document.createElement("button");
    answer.append(theButton);
    theButton.append(buttonList[0]);
 
    
    theButton.addEventListener("click",function(event){
        event.preventDefault();
        console.log(event);

        startQuiz();
    });

}

function startQuiz (){
    console.log("Quiz Started!");
}

init();
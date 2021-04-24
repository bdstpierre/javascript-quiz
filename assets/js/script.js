var timeEl = document.querySelector(".timer");
var question = document.querySelector(".question");
var answer = document.querySelector(".answer");
var buttonStart = "Start Quiz";
var theButton;
var buttonList = ["1. ", "2. ", "3. ", "4. "];
var buttonListener = [];
var secondsLeft = 90;
var questionNo = 0;
var response = "";

quiz = [{
    question: "question 1",
    ans: ["ans 1", "ans 2", "ans 3", "ans 4"],
    key: 1,
},{
    question: "question 2",
    ans: ["ans 1.1", "ans 1.2", "ans 1.3", "ans 1.4"],
    key: 1,
}
];

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
        for (var i = 0; i < 4; i++){
            buttonListener[i] = document.createElement("button");
            answer.append(buttonListener[i]);
            answer.children[i].append(quiz[questionNo]["ans"][i]);
     
        
            buttonListener[i].addEventListener("click",function(event){
                event.preventDefault();
                console.log(event);
                response = i;
            });
            // mark wrong or correct
            // ask next question
        }
        
    

    }
    
        question.textContent = quiz[questionNo]["question"];
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
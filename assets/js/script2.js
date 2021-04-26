var scores = document.querySelector(".scores");
var goBack = document.querySelector(".return");
var clearScores = document.querySelector(".reset");

function init(){
    goBack.addEventListener("click",function(event){
        event.preventDefault();
    
        window.location.href = "./index.html";
        
    });

    clearScores.addEventListener("click",function(event){
        event.preventDefault();
    
        var highscores = JSON.parse(localStorage.getItem("highscores"));
        localStorage.setItem("highscores", null);
        
        var allScores = document.querySelectorAll(".score-row");
       
        for (var i = 0; i < allScores.length; i++) {
   
            allScores[i].remove();
        }
      
    });

}

function showScores(){
    var highscores = JSON.parse(localStorage.getItem("highscores"));

    if (highscores !== null) {
        for (var i = 0; i < highscores.length; i++){
            line = document.createElement("p");
            line.setAttribute("class", "score-row");
            var count = i + 1;
            line.textContent = count + ". " + highscores[i]["init"] + "  " + highscores[i]["score"];
            scores.appendChild(line);
        }
    }
}

init();
showScores();
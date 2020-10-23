var timeEl = document.querySelector(".timer");
var getQuestion = document.querySelector("#question")
var timeLeft = 300;
var score = 0
var question = 0

function setTime() {
    $('.startDiv').empty()
    var timerInterval = setInterval(function(){
    timeLeft--;
    minutesLeft = Math.floor(timeLeft / 60)
    secondsLeft= timeLeft % 60
    timeEl.textContent = minutesLeft + ":" + secondsLeft + " time remaining." 
   
    console.log("----------")

    if(timeLeft === 0) {
        clearInterval(timerInterval);}
    
    }, 1000);
    
}

$('.startBtn').on('click', setTime);

function displayQuestion(){


}
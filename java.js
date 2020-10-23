var timeEl = document.querySelector(".timer");
var getQuestion = $("#question")
var questions = [
    "What is the firt color in the rainbow?",
    "How do you contain a comment in HTML?",
    "How many miles are in a marathon?",
    "What is the name of Woody's austronaut friend?"
]
var submitBtn = $('.submit')
var timeLeft = 300;
var score = 0
var questionCount = 0


function setTime() {
    $('.startDiv').empty()
    submitBtn.attr('style', "display: block;")
    displayQuestion()
    var timerInterval = setInterval(function(){
    timeLeft--;
    minutesLeft = Math.floor(timeLeft / 60)
    secondsLeft= timeLeft % 60
    timeEl.textContent = minutesLeft + ":" + secondsLeft + " Time remaining" 
    

    if (secondsLeft < 10){
        timeEl.textContent = minutesLeft + ":0" + secondsLeft + " time remaining." 
    }

    if(timeLeft === 0) {
        clearInterval(timerInterval);}
    
    }, 1000);
    
}



// function submitAnswer(){
//     var selectedAnswer = $()
    
//     if ( selectedAnswer = true){
//         score ++;

//     } else if (selectedAnswer = false){
//         timerInterval -5;
//     }
// }





$('.startBtn').on('click', setTime);



function displayQuestion(){
    getQuestion.text(questions[questionCount])
    console.log(questions[questionCount])
}
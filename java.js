var timeEl = document.querySelector(".timer");
var getQuestion = $("#question")
var questions = [
    "What is the first color in the rainbow?",
    "How do you style font color in CSS?",
    "How many miles are in a marathon?",
    "What is the name of Woody's austronaut friend?"
]
var options = [{
        content1: "Red",
        content2: "Blue",
        content3: "Green",
        content4: "Purple",
        answer: "option1"
    },
    {
        content1: "font",
        content2: "color-font",
        content3: "color",
        content4: 'font color ',
        answer: "option3"
    },
    {
        content1: "13.1",        
        content2: "26.2",    
        content3: "5",        
        content4: "7.3",
        answer: 'option2'
    }, 
    {
        content1: "Mr. Potatohead",        
        content2: "Pig",        
        content3: "Rex",        
        content4: "Buzz Lightyear",
        answer: 'option4'
    }]



var submitBtn = $('.submit')
var quizTime = 300;
var begin = 0
var score = 0
var questionCount = 0



function startQuiz() {
    $('.startDiv').empty()
    $('.container').attr('style', "display: block;")
    displayQuestion()
    displayOptions()
    setTime()    
}

function setTime() {
    var timerInterval = setInterval(function(){
        var timeElapsed = begin ++
    var timeLeft = quizTime - timeElapsed;
    var minutesLeft = Math.floor(timeLeft / 60)
    var secondsLeft = timeLeft % 60
    timeEl.textContent = minutesLeft + ":" + secondsLeft + " Time remaining" 
    

    if (secondsLeft < 10){
        timeEl.textContent = minutesLeft + ":0" + secondsLeft + " time remaining." 
    }

    if(timeLeft === 0) {
        clearInterval(timerInterval);}
    
    }
    
    , 1000);
    
    
    
}



function displayOptions(){
    var select1 = $('.opt1')
    var select2 = $('.opt2')
    var select3 = $('.opt3')
    var select4 = $('.opt4')

    $('.opt1').html(options[questionCount].content1)
    $('.opt2').html(options[questionCount].content2)
    $('.opt3').html(options[questionCount].content3)
    $('.opt4').html(options[questionCount].content4)
    console.log(options[questionCount].content1)
}



function submitAnswer(event){
    event.preventDefault()
    questionCount ++;
    displayQuestion()
    displayOptions()
    radioValue()

}

function radioValue(){
    var radio = $('.form-check-input')
    for ( i = 0; i < radio.length; i++){
        if(radio[i].checked){

            var radioSelected =  radio[i].value
            }
           
    }
    if ( radioSelected === options[questionCount-1].answer ){
        score ++;
        
    } else {
        begin - 5;
        
    }
    console.log(radioSelected)
    console.log(options[questionCount-1].answer)
    console.log(score)
}




$('.startBtn').on('click', startQuiz);
submitBtn.on('click', submitAnswer);


function displayQuestion(){
    getQuestion.text(questions[questionCount])
    console.log(questions[questionCount])
}
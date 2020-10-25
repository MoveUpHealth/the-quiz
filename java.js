var timeEl = document.querySelector(".timer");
var getQuestion = $("#question")
var submitBtn = $('.submit')
var quizTime = 300;
var begin = 0
var questionCount = 0
var score = 0
var wrong = 0
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

function setTime() {
    var timerInterval = setInterval(function(){
        begin ++
    if(wrong > 0){
    var timeElapsed = begin + wrong*5
    var timeLeft =  quizTime - timeElapsed;
    } else if (wrong === 0){
    var timeElapsed = begin
    var timeLeft = quizTime - timeElapsed;
    }
    
    var minutesLeft = Math.floor(timeLeft / 60)
    var secondsLeft = timeLeft % 60
    timeEl.innerHTML = minutesLeft + ":" + secondsLeft + " Time remaining"   

    if (secondsLeft < 10){
        timeEl.textContent = minutesLeft + ":0" + secondsLeft + " time remaining." 
    }

    if(timeLeft === 0 || questionCount === questions.length) {
        clearInterval(timerInterval);
        $('.answers').attr('style', "display: none;")
        $('#question').text("Your score is " + score)
        highScore()
        localStorage.setItem("score", score)
    }
    }
    , 1000);    
}

function displayQuestion(){
    getQuestion.text(questions[questionCount])
    console.log(questions[questionCount])
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

function startQuiz() {
    $('.startDiv').empty()
    $('.container').attr('style', "display: block;")
    displayQuestion()
    displayOptions()
    setTime()
    if(localStorage.scoreBoard !== null){
      var scoreBoard =  localStorage.getItem("scoreBoard")
      return scoreBoard
      console.log(scoreBoard)
    }   
    console.log(scoreBoard) 
}

function submitAnswer(event){
    event.preventDefault()
    questionCount ++;
    if(questionCount < questions.length){
    displayQuestion()
    displayOptions()
    radioValue()
    } else if (questionCount = questions.length){
        $('.answers').attr('style', "display: none;")
        $('#question').text("Your score is " + score)
        localStorage.setItem("score", score)
    }
}

function radioValue(){
    var radio = $('.form-check-input')
    for (var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            var radioSelected =  radio[i].value
            } 
    }
    if ( radioSelected === options[questionCount-1].answer ){
        score ++;
    }
        else {
            wrong ++;
    }
   
}

function highScore(){
    var scoreBoard = JSON.parse(localStorage.getItem("scoreBoard"))
    console.log("---" + scoreBoard)
    if(scoreBoard === null){
            scoreBoard = [{
            userName: "User",
            userScore: "3"
            },
            {
            userName: "User",
            userScore: "2"
            },
            {
            userName: "User",
            userScore: "1"
            }]
    
        
        console.log("1 " + scoreBoard)}
        
      
    var scoreBoardTitle = document.createElement('h2') 
    scoreBoardTitle.innerHTML = "High Scores"
    document.getElementById('question').appendChild(scoreBoardTitle)
    localStorage.getItem("scoreBoard")
    for(var i = 0; i < scoreBoard.length; i++){
       
    var newP = document.createElement('p')
    newP.innerHTML = scoreBoard[i].userName + ': ' + scoreBoard[i].userScore;
    newP.setAttribute("id", "listItem[i]")
    newP.setAttribute("style", "font-size: 16px;")
    document.getElementById('question').appendChild(newP)
    }


    if(score >= scoreBoard[2].userScore){
            var inputUser = document.createElement("input")
            var inputSubmit = document.createElement('button')
            inputUser.setAttribute('placeholder', 'Type your initials')
            inputUser.setAttribute("style", "font-size: 16px;")
            inputSubmit.setAttribute('class', "btn btn-primary submitInitials")
            inputSubmit.setAttribute("style", "font-size: 16px;")
            inputSubmit.innerHTML = "Submit"
            document.getElementById('question').appendChild(inputUser)
            document.getElementById('question').appendChild(inputSubmit)
            
            inputSubmit.addEventListener("click", function(event){
                event.preventDefault();
                var userHighScore = {
                    userName: inputUser.value.trim(),
                    userScore: score,
                }
                var submitted = document.createElement("h3")
                submitted.innerHTML = "Congratulations! You made it on the scoreboard!"
                document.getElementById('question').removeChild(inputUser)
                document.getElementById('question').removeChild(inputSubmit)
                document.getElementById('question').appendChild(submitted)
                scoreBoard.pop()
                scoreBoard.push(userHighScore)
                function compareScore(a , b){
                    var scoreA = a.userScore
                    var scoreB = b.userScore

                    let comparison = 1
                    if (scoreA > scoreB){
                        comparison = -1;
                    } else if (scoreA < scoreB){
                        comparison = 1;
                    }
                    return comparison;
                }
                function compareName(a , b){
                    var nameA = a.userName
                    var nameB = b.userName

                    let comparison = 0
                    if (nameA > nameB){
                        comparison = 1;
                    } else if (nameA < nameB){
                        comparison = -1;
                    }
                    return comparison;
                }
                scoreBoard.sort(compareScore)
                scoreBoard.sort(compareName)
                scoreBoard.sort(compareScore)
                localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard))
                console.log("local storage scoreboard: " + JSON.stringify(scoreBoard))
            })
            
            console.log("local storage scoreboard: " + JSON.stringify(scoreBoard))

        }
    }






$('.startBtn').on('click', startQuiz);
submitBtn.on('click', submitAnswer);



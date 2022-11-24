var start = document.querySelector("#start");
var startDiv = document.querySelector("#startDiv");
var questionDiv = document.querySelector("#questionDiv");
var questionText = document.querySelector("#questionText");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var timeLeft = 40;
var startQuiz = document.getElementById("startQuiz");
var timerEl = document.querySelector("#timerEl");
var scoreForm = document.querySelector("#scoreForm");
var saveScore = document.querySelector("#saveScore");



choice1.addEventListener("click", nextQuestion)
choice2.addEventListener("click", nextQuestion)
choice3.addEventListener("click", nextQuestion)
choice4.addEventListener("click", nextQuestion)
startQuiz.addEventListener("click", function countdown(){  
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        //timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
    } else if (timeLeft === 1) {
        // timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
    } else {
        // timerEl.textContent = '';
        //clearInterval(timeInterval);
        "Your time is up!";
      }
      console.log(timeLeft)
      timerEl.textContent ="Time Remaining: " + timeLeft; 
    }, 1000);

    //startDiv.innerHTML = timeLeft

    startDiv.classList.add("hidden")
    questionDiv.classList.remove("hidden")
    renderQuestion();
});

var questions = [
  {
  question: "Commonly used data types do NOT include:",
answers: [
  {text: "1. strings", isTrue: false},
  {text: "2. booleans", isTrue: false},
  {text: "3. numbers", isTrue: false},
  {text: "4. alerts", isTrue: true},
  ],
},

{
  question: "The condition in an if/else statement is enclosed within ___.",
answers: [
  {text: "1. quotes", isTrue: false},
  {text: "2. curly brackets", isTrue: false},
  {text: "3. parentheses", isTrue: true},
  {text: "4. square brackets", isTrue: false},
  ],
},

{
  question: "Arrays in JavaScript can be used to store ___.",
answers: [
  {text: "1. numbers and strings", isTrue: false},
  {text: "2. other arrays", isTrue: false},
  {text: "3. booleans", isTrue: false},
  {text: "4. all of the above", isTrue: true},
    ],
  },
];
var questionIndex = 0
function renderQuestion(){
  questionText.textContent = questions[questionIndex].question
  for(let i = 0; i<4; i++){
    var choice = document.querySelector("#choice"+(i+1))
    choice.textContent = questions[questionIndex].answers[i].text
    choice.value = questions[questionIndex].answers[i].isTrue
  }
  questionIndex++
}

var correct = "that is correct!"
var incorrect = "that is incorrect"

function nextQuestion(event){
//console.log(event.target.innerText)
console.log(event.target.value)
if (event.target.value === "false") {
  //console.log("hit")
  timeLeft-=5
} else {
  //console.log("hit")
  "Correct!"
}
renderQuestion()
}


// add a score keeper. and have it logged to the local storage.

// var score = timeLeft(display.score);
// alert ("Congratulations! Your score is" + timeLeft);
// userprompt("Please enter your initials");

//create a trivia form with true/false options (your choice).s

//create questions and answers
// We declare all variables pertaining to quiz results in an object 
let triviaQuiz = {
    correctAnswers: 0,
    wrongAnswers: 0,
    noAnswers: 0,
    time: 20        
    };

    let clockTimer = 30
    // This is the interval in which it counts down
    let countdowning = setInterval(countdown, 1000);
    console.log(countdowning, "this is a countdown");
    ​
    ​
    // Countdown function, clockTimer
    function countdown() {
        clockTimer--;
        document.getElementById("countdown").innerHTML = "Time left " + clockTimer;
        console.log("TIMER", clockTimer)
    ​
        if(clockTimer < 1) {
            timeStop();
        }
    };
    ​
    function timeStop() {
        clearInterval(countdowning);
    ​
        // STILL NEED TO ADD RESULTS PART TO THIS FUNCTION
    }
  
  //We declare all quiz questions in an array to be able to compare data easily
  
  const Questions = [
        {
          question: "The word yellow comes from the Old English word",
          answers: [
             "upon",
             "geolu",
             "tootsie",
             "yaleu"
          ],
  
          correctAnswer: "2"
        },  
        {
          question: "The song "Yellow" gave ___________ worldwide fame in the year 2000",
          answers: [
             "Coldplay", 
             "The Beatles",
             "Carrie Underwood",
             "NF"
          ],
  
          correctAnswer: "0"
        },
        {
          question: "The color Yellow is associated to mourning in which country?",
          answers: [
             "Columbia",
             "Egypt",
             "Russia",
             "Estonia"
          ],
          correctAnswer: "1"
        },
        {
          question: "Yellow is the color of courage in which country?",
          answers: [
             "United States",
             "Nigeria",
             "Japan",
             "Greece",
             
          ],
          correctAnswer: "2"
        },
  
       {
          question: "Yellow is an appropriate color for a room used for...",
          answers: [
             "time out spot, because it makes people feel sad.",
             "movie room, because black and yellow looks awesome.",
             "sleeping, because you wake up to the sunshine!",
             "studying, because it has a stimulating effect on the mind."
          ],
          correctAnswer: "3"
        },
  
        {
          question: "The creators of post-it notes, made the original post-it notes Yellow because...",
          answers: [
             "They pulled the word Yellow out from a drawing hat, to pick the color.",
             "Inspired by the word "hello" and yelling it." ,
             "The team leader loved the color Yellow.",
             "They were using yellow scratch paper at the time of designing them."
          ],
          correctAnswer: "3"
        },

          
        {
            question: "",
            answers: [
               "Amanda Bynes",
               "Kel Mitchell",
               "Keenan Thompson",
               "Josh Server"
            ],
            correctAnswer: "3"
          },

            
        {
            question: "",
            answers: [
               "Amanda Bynes",
               "Kel Mitchell",
               "Keenan Thompson",
               "Josh Server"
            ],
            correctAnswer: "3"
          },

            
        {
            question: "",
            answers: [
               "Amanda Bynes",
               "Kel Mitchell",
               "Keenan Thompson",
               "Josh Server"
            ],
            correctAnswer: "3"
          },

            
        {
            question: "",
            answers: [
               "Amanda Bynes",
               "Kel Mitchell",
               "Keenan Thompson",
               "Josh Server"
            ],
            correctAnswer: "3"
          }
  ];
  

//create timer, start stop, and function
var n = 16; // modify this for number of seconds to answer
document.getElementById( 'time').value = "Answer in " + n + " seconds";
var i = setInterval('count()' , 1000);
var tooLate;

function count() {
tooLate = 0;
n--;
if(n >=0) {
document.getElementById( 'time').value = "Answer in " + n + " seconds";
}
else {
clearInterval(i);

alert("Too late!");
if(document.getElementById( 'answer').value == correct){
tooLate = 1;
}
}


function answer() {

var correct = "green"; // This is the correct answer
if (tooLate == 0) {
if(document.getElementById( 'answer').value == correct) {
clearInterval(i);
alert("Right Answer with " + n + " seconds remaining");
}
else{
clearInterval(i);
alert("Incorrect! The answer was " + correct);
}
}

submitform();

//submit form
function submitform()
{
document.forms["myform"].submit();
}

}


document.getElementById("start").innerHTML("Start");
document.getElementById("stop").innerHTML("Stop")


}
//create countdown timer





//The player will have a limited amount of time to finish the quiz. 
// make a timer to begin when the player hits the start button
//have timer start and end, after player has chosen their answers
// or if player runs out of time, they lose, game returns to start
//The game ends when the time runs out. 
//The page will reveal the number of questions 
//that player answers correctly and incorrectly.
//player picks only one answer per question.



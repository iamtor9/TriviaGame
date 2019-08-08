//create a trivia form with true/false options (your choice).

let clockTimer = "timeClock"
let playerGuess =[" "]
let a= "true"
let b= "false"

//create questions and answers
// We declare all variables pertaining to quiz results in an object 
var quiz = {
    correctAnswers: 0,
    wrongAnswers: 0,
    noAnswers: 0,
    time: 20        
    };
  
  //We declare all quiz questions in an array to be able to compare data easily
  
  var myQuestions = [
        {
          question: "Who Lives In A Pineapple Under The Sea?",
          answers: [
             "Plankton",
             "Ren & Stimpy",
             "Spongebob Squarepants",
             "Avatar"
          ],
  
          correctAnswer: "2"
        },  
        {
          question: "Who Loves Orange Soda?",
          answers: [
             "Kel Loves Orange Soda", 
             "Arnold Loves Orange Soda",
             "Kora Loves Orange Soda",
             "Patrick Loves Orange Soda"
          ],
  
          correctAnswer: "0"
        },
        {
          question: "Who Are Timmy's Fairy God Parents?",
          answers: [
             "Sparkle & Avalon",
             "Cosmo & Wanda",
             "Poof & Sparky",
             "Blonda & Fairwinkle"
          ],
          correctAnswer: "1"
        },
        {
          question: "Who is Rocko's Best Friend?",
          answers: [
             "Heffer Wolfe",
             "Mr. BigHead",
             "Filburt Turtles",
             "Bev BigHead",
             
          ],
          correctAnswer: "0"
        },
  
       {
          question: "Who is Secretly in Love with Arnold?",
          answers: [
             "Phoebe",
             "Rhonda",
             "Nadine",
             "Helga"
          ],
          correctAnswer: "3"
        },
  
        {
          question: "Which Cast Member Was in All Seasons of All That",
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



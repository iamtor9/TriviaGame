//create a trivia form with true/false options (your choice).s

//create questions and answers
    let clockTimer = 60;
    // the interval, counts down
    let countdown = setInterval(countdown, 1000);
    console.log(countdown);
    ​
    ​
    // Countdown function, clockTimer
    function countdown1() {
        clockTimer--;
        document.getElementById("countdown1").innerHTML = "Timer" + clockTimer;
        console.log("Timer", clockTimer);
    ​
        if(clockTimer < 1) {
            timeStop();
        }
    };
    ​
    function timeStop() {
        clearInterval(countdown);
    }
  
//create an array of questions
//create questions with answer array inside 

  
  
  let questions = [
        {
         questions1: "The word yellow comes from the Old English word",
          answers: [
             "upon",
             "geolu",
             "tootsie",
             "yaleu"
          ],
            correctAnswer: "2"
        },  
        {
         questions2: "The song "Yellow" gave ___________ worldwide fame in the year 2000",
          answers: [
             "Coldplay", 
             "The Beatles",
             "Carrie Underwood",
             "NF"
          ],
  
          correctAnswer: "0"
        },
        {
         questions3: "The color Yellow is associated to mourning in which country?",
          answers: [
             "Columbia",
             "Egypt",
             "Russia",
             "Estonia"
          ],
          correctAnswer: "1"
        },
        {
         questions4: "Yellow is the color of courage in which country?",
          answers: [
             "United States",
             "Nigeria",
             "Japan",
             "Greece",
             
          ],
          correctAnswer: "2"
        },
  
       {
         questions5: "Yellow is an appropriate color for a room used for...",
          answers: [
             "time out spot, because it makes people feel sad.",
             "movie room, because black and yellow looks awesome.",
             "sleeping, because you wake up to the sunshine!",
             "studying, because it has a stimulating effect on the mind."
          ],
          correctAnswer: "3"
        },
  
        {
         questions6: "The creators of post-it notes, made the original post-it notes Yellow because...",
          answers: [
             "They pulled the word Yellow out from a drawing hat, to pick the color.",
             "Inspired by the word "hello" and yelling it." ,
             "The team leader loved the color Yellow.",
             "They were using yellow scratch paper at the time of designing them."
          ],
          correctAnswer: "3"
        },






//The player will have a limited amount of time to finish the quiz. 
// make a timer to begin when the player hits the start button
//have timer start and end, after player has chosen their answers
// or if player runs out of time, they lose, game returns to start
//The game ends when the time runs out. 
//The page will reveal the number ofquestionss 
//that player answers correctly and incorrectly.
//player picks only one answer perquestions.



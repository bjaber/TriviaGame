//psudo code 
// display questions, and possible answers
// display timer/reset timer when game is done
//check if player selected the correct answers
// player has limited time to complete quiz
// Generate score at the end of game


$(document).ready(function () {
    $("#start").on("click",timerStart);

});


    var timer;
    clockRunning =false;
    var counter =0;

 function timerStart(){
    if(!clockRunning){
    clockRunning =true;
    timer = setInterval(count,1000);
    };
    setTimeout(reset, 1000*10);
 }
 function count(){
    counter++;
    let timeConverted = timeConverter(counter);
    $("#timer").text(timeConverted);

 }
 function reset(){
    clearInterval(timer);
    clockRunning = false;
    $("#timer").text("00:00");
    alert("times up!")
    counter =0;
 }

 function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
  
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }
  // logic for timer and start button are above this line. Everything below is game function
  //display questions, grab player choices
  // display correct/wrong answers after time interval runs out.


  var questions = [
      {
          question: "what color is my Car?",
          choices: ["white","silver","black","green"],
          answer:"silver"
      },
      {
          question:"What kind of Motor does a Subaru WRX have?",
          choices: ["v8","v6","Boxer","Rotary"],
          answer:"Boxer"
      },
      {
          question:"What is 2+5?",
          choices:[0,3,7,6],
          answer: 7
      }
    ]
    
   for(var i =0; i< questions.length; i++){

    let questionText = $(`<h1>${questions[i].question}</h1>`);

   }
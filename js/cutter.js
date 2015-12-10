$( document ).ready(function() {
   //computer choice logic
  function computerChoice(){
    var choices = ['rock', 'paper', 'scissors'];
    var computerRando = choices[Math.floor(Math.random()* choices.length)];
    return computerRando;
  } 

  function choose(userChoice){
    if (userChoice === "rock"){
      console.log(userChoice)
      return "rock";
    } else if(userChoice === "paper"){
      return "paper";
    } else if(userChoice === "scissors"){
      return "scissors";
    }
  }

  $("#rock").click(function(){
    choose("rock");
    });
  $("#paper").click(function(){
    choose("paper");
    }); 
  $("#scissors").click(function(){
    choose("scissors");
    }); 
  $("#go").click(function(){
    compare(choose, computerChoice);
  $("#bigWin").modal('show')
  });

  //fire off game
  var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
      document.getElementById("result").innerHTML = "Tie!  Train harder!";
    }
    else if (choice1 === "rock") {
      if (choice2 === "scissors") {
        document.getElementById("result").innerHTML = "You have vanquished your enemy!";
      }
      else {
        document.getElementById("result").innerHTML = "You have brought shame upon your dojo!!";
      }
    }
    else if (choice1 === "paper") {
      if (choice2 === "rock") {
        document.getElementById("result").innerHTML = "You have vanquished your enemy!";
      }
      else if (choice2 ==="scissors") {
        document.getElementById("result").innerHTML = "You have brought shame upon your dojo!!";
      }
    }
    else if (choice1 === "scissors") {
      if (choice2 === "rock") {
        document.getElementById("result").innerHTML = "You have brought shame upon your dojo!!";
      }
      else if (choice2 === "paper") {
        document.getElementById("result").innerHTML = "You have vanquished your enemy!";
      }
    }
    else {
      document.getElementById("result").innerHTML = "ERROR!";
    }
  }

  //Counters
  var rounds = 0;
  var wins = 0;
  var loses = 0;

  $('#rounds').html(rounds);
  $('#yourScore').html(wins);
  $('#computerScore').html(loses);
});
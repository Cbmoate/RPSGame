var rounds = 1;
var wins = 0;
var loses = 0;
var computerChoice = ["Rock", "Paper", "Scissors"];
var playerChoice;
var computerRando = computerChoice[randomIndex];
var randomIndex = Math.floor(Math.random()*computerChoice.length);
function theGame(playerChoice, oppChoice) {
  if(playerChoice === oppChoice){
    $("#result").html("You got a tie!");
  } else if (playerChoice === "Rock"){
  if(oppChoice === "Paper"){
    $("#result").html("You Lose :(");
  }else {
    $("#result").html("You Win");
  }
  }
  else if (playerChoice === "Paper"){
    if(oppChoice === "Rock"){
      $("#result").html("You Win :)");
  }else {
    $("#result").html("You Lose!");
  }
  }
  else if (playerChoice === "Scissors"){
    if(oppChoice === "Paper"){
      $("#result").html("You Win :)");
  }else {
    $("#result").html("You Lose!");
  }
  }
} 
$(document).ready(function() {
  $(".gameButtons").on("click", function(){
    playerChoice = $(this).attr('data-choice');
    $("#go").click(function(){
    theGame(playerChoice, computerRando);
    $("#bigWin").modal('show');
  });
});

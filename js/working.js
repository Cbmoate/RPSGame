$(document).ready(function() { 
  var rounds = 1;
  var wins = 0;
  var loses = 0;
  var computerChoice = ["Rock", "Paper", "Scissors"];
  var player;


  function theGame(player, computerRando) {
    if(player === computerRando){
      $("#result").html("You got a tie, you must train harder!");
    }
    else if (player === "Rock"){
      if(computerRando === "Paper"){
        $("#result").html("You have brought shame upon your dojo!");
      }
      else {
        $("#result").html("You have vanquished your enemy");
      }
    }
    else if (player === "Paper"){
      if(computerRando === "Rock"){
        $("#result").html("You have vanquished your enemy");
      }
      else {
        $("#result").html("You have brought shame upon your dojo!");
      }
    }
    else if (player === "Scissors"){
      if(computerRando === "Paper"){
        $("#result").html("You have vanquished your enemy");
      }
      else{
        $("#result").html("You have brought shame upon your dojo!");
      }
    }
  } 
  $(".choiceButtons").on("click", function(){
    $("#bigWin").modal('show');
      player = $(this).attr('data-choice');
      var computerRando = computerChoice[random];
      var random = Math.floor(Math.random()*computerChoice.length);
      theGame(player, computerRando);
      
  });
});

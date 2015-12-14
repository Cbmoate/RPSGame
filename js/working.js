$(document).ready(function() { 
  
  var rounds = 1;
  var wins = 0;
  var loses = 0;
  $('#rounds').html(rounds);
  $('#yourScore').html(wins);
  $('#computerScore').html(loses);
  $("#rules").modal('show');

  var computerChoice = ["Rock", "Paper", "Scissors"];
  var player;

  function theGame(player, computerRando) {
    if(player === computerRando){
      $("#result").html("You got a tie, you must train harder!");
    }
    else if (player === "Rock"){
      rounds++;
      if(computerRando === "Paper"){
        $("#result").html("You have failed and brought shame upon your dojo!");
      }
      else {
        $("#result").html("You have vanquished your enemy");
      }
    }
    else if (player === "Paper"){
      rounds++;
      if(computerRando === "Rock"){
        $("#result").html("You have vanquished your enemy");
      }
      else {
        $("#result").html("You have failed and brought shame upon your dojo!");
      }
    }
    else if (player === "Scissors"){
      rounds++;
      if(computerRando === "Paper"){
        $("#result").html("You have vanquished your enemy");
      }
      else{
        $("#result").html("You have failed and brought shame upon your dojo!");
      }
    }
  } 

  $(".choiceButtons").on("click", function(){
    $("#bigWin").modal('show');
      player = $(this).attr('data-choice');
      var random = Math.floor(Math.random()*computerChoice.length);
      var computerRando = computerChoice[random];
      theGame(player, computerRando); 
    if (rounds == 5) {
      $("#finishHim").modal('show');
    }
  });
});

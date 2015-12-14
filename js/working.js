$(document).ready(function() { 
  
  var rounds = 2;
  var wins = 0;
  var loses = 0;
  $('#rounds').html(rounds-1);
  $('#yourScore').html(wins);
  $('#computerScore').html(loses);
  $("#rules").modal('show');
  
  var computerChoices = ["Rock", "Paper", "Scissors"];
  var player;

  function theGame(player, computerRando) {
    if(player === computerRando){
      $("#result").html("You got a tie, you must train harder!");
      rounds--;
      console.log(rounds)
    }
    else if (player === "Rock"){
      if(computerRando === "Paper"){
        $("#result").html("You have failed and brought shame upon your dojo!");
        loses++;
      }
      else {
        $("#result").html("You have vanquished your enemy");
        wins++;
      }
    }
    else if (player === "Paper"){
      if(computerRando === "Rock"){
        $("#result").html("You have vanquished your enemy");
        wins++;
      }
      else {
        $("#result").html("You have failed and brought shame upon your dojo!");
        loses++;
      }
    }
    else if (player === "Scissors"){
      if(computerRando === "Paper"){
        $("#result").html("You have vanquished your enemy");
        wins++;
      }
      else{
        $("#result").html("You have failed and brought shame upon your dojo!");
        loses++;
      }
    }
  } 

  $(".choiceButtons").on("click", function(){
    $("#bigWin").modal('show');
      player = $(this).attr('data-choice');
      var random = Math.floor(Math.random()*computerChoices.length);
      var computerRando = computerChoices[random];
      theGame(player, computerRando);
      rounds++;
      $('#rounds').html(rounds-1);
      $('#yourScore').html(wins);
      $('#computerScore').html(loses);
    if (loses == 3 || wins == 3) {
      $("#finishHim").modal('show');
    }
  });
});
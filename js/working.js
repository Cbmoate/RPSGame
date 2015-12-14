$(document).ready(function() { 
    
  var computerChoices = ["Rock", "Paper", "Scissors"];
  var player;
  var rounds = 2;
  var wins = 0;
  var loses = 0;
  $('#rounds').html(rounds-1);
  $('#yourScore').html(wins);
  $('#computerScore').html(loses);
  $("#rules").modal('show');
  $("#bigWin").on("click", function(){
    $(this).modal('hide')
  });

  function theGame(player, computerRando) {
    if(player === computerRando){
      $("#result").html("You got a tie, you must train harder!");
      rounds--;
    }
    else if (player === "Rock"){
      if(computerRando === "Paper"){
        $("#result").html("You have failed and brought shame upon your dojo!");
        loses++;
      }
      else {
        $("#result").html("You've hit the Robot.  He's getting weaker!");
        wins++;
      }
    }
    else if (player === "Paper"){
      if(computerRando === "Rock"){
        $("#result").html("You've hit the Robot.  He's getting weaker!");
        wins++;
      }
      else {
        $("#result").html("You have failed and brought shame upon your dojo!");
        loses++;
      }
    }
    else if (player === "Scissors"){
      if(computerRando === "Paper"){
        $("#result").html("You've hit the Robot.  He's getting weaker!");
        wins++;
      }
      else{
        $("#result").html("You have failed and brought shame upon your dojo!");
        loses++;
      }
    }
  } 

  $(".choiceButtons").on("click", function(){
    if (loses < 3 && wins < 3) {
      $("#bigWin").modal('show');
      player = $(this).attr('data-choice');
      var random = Math.floor(Math.random()*computerChoices.length);
      var computerRando = computerChoices[random];
      theGame(player, computerRando);
      rounds++;
      $('#rounds').html(rounds-1);
      $('#yourScore').html(wins);
      $('#computerScore').html(loses);
    }
    else if (loses === 3 || wins === 3) {
      $("#finishHim").modal('show');
      if (loses === 3) {
        $("#fatality").html("You are a failure!  The Robot Ninja breaks you over his knee and continues along his path of destruction.");
      }
      else{
        $("#fatality").html("With a flourish of your ninja skills, you do a spinning heel kick and destroy the Robot's central processor.");
      }
    }
  });

  $("#reset").on("click", function(){
  var rounds = 2;
  var wins = 0;
  var loses = 0;
  $('#rounds').html(rounds-1);
  $('#yourScore').html(wins);
  $('#computerScore').html(loses); 
  $("#finishHim").modal('hide');
  });
});
$( document ).ready(function() {
  $('#rounds').html(rounds);
  $('#yourScore').html(wins);
  $('#computerScore').html(loses);
  var computerChoice = ["Rock", "Paper", "Scissors"];
  var playerChoice;


  //fire off game
  theGame(choice1, choice2) {
    if (choice1 === choice2) {
      $("result").HTML = "Tie!  Train harder!";
    }
    else if (choice1 === "rock") {
      if (choice2 === "scissors") {
        $("result").HTML = "You have vanquished your enemy!";
      }
      else {
        $("result").HTML = "You have brought shame upon your dojo!!";
      }
    }
    else if (choice1 === "paper") {
      if (choice2 === "rock") {
        $("result").HTML = "You have vanquished your enemy!";
      }
      else if (choice2 ==="scissors") {
        $("result").HTML = "You have brought shame upon your dojo!!";
      }
    }
    else if (choice1 === "scissors") {
      if (choice2 === "rock") {
        $("result").HTML = "You have brought shame upon your dojo!!";
      }
      else if (choice2 === "paper") {
        $("result").HTML = "You have vanquished your enemy!";
      }
    }
    else {
      $("result").HTML = "ERROR!";
    }
  }

  $(".choiceButtons").on("click", function(){
    playerChoice = $(this).attr('data-choice');
    var randomIndex = Math.floor(Math.random()*computerChoice.length); 
    var oppChoice = computerChoice[randomIndex];
    theGame(playerChoice, oppChoice);
    
  });
});
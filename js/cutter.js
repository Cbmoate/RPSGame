var choices = ['rock', 'paper', 'scissors'];

//computer choice logic
var computerChoice = Math.random();
if (computerChoice < 0.33) {
    computerChoice = "rock";
} else if (computerChoice > 0.66) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

//Counters
var rounds = 0;
var wins = 0;
var loses = 0;

$('#rounds').html(rounds);
$('#yourScore').html(wins);
$('#computerScore').html(loses);
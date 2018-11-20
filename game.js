
// Available options for the user and computer to select from:

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


var wins = 0;
var losses = 0;
var guessesavailable = 9;
var guessessofar = [];

// run when the user presses and lets go of a key:
var computerChoice = letters[Math.floor(Math.random() * letters.length)];
console.log("This is computer's choice: " , computerChoice);;

        // Linking of variables to the html id's:

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesavailableText = document.getElementById("attemptsLeft-text");
var guessessoFarText = document.getElementById("guessessoFar-text");

document.onkeyup = function (event) {

    // Gathers users keycode as well as makes it a string:

    // var playerGuess = String.fromCharCode(Event.keycode).toLocaleLowerCase()
   
    var playerGuess = event.key.toLocaleLowerCase();
    console.log("This is Users choice" , playerGuess);

    // tells the computer to select random letter from var Letters:

    // Comparison between the computer and user guess to determine Wins and losses:

    if (playerGuess < 1) {
        losses++;
        guessesavailable = 9;
        guessessofar = [];

    }

    if (playerGuess === computerChoice) {
       console.log("Match!");
        wins++;
    }


    else {
        console.log("NO SOUP FOR YOU!!");
        guessessofar.push(playerGuess);
        guessesavailable--;
    }

// Uses variables to replace the text content:

winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesavailableText.textContent = "Attempts left: " + guessesavailable;
guessessoFarText.textContent = "Guesses so far: " + guessessofar;
}

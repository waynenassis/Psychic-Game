var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//set all variables to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = undefined;

//functions for the "new" variables after game begins and user pushes keys
//this is where connect to HTML to fill in visual data for user 

var newGuessesLeft = function() {
    document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessesLeft;
};

//computer chooses random letter from its choices in the variable at the top. console log chosen letter.
var newLetterToGuess = function() {
    letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(letterToGuess);
};

//store all keys pressed by user and separate by a comma
var newGuessesSoFar = function() {
    document.querySelector('#userGuess').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

//function called when we reset everything after win or lose
var reset = function() {
    guessesLeft = 9;
    guessedLetters = [];

    newLetterToGuess();
    newGuessesLeft();
    newGuessesSoFar();
}

//When key is pressed and released it becomes the users guess, reduce guessesLeft by 1.
document.onkeyup = function(event) {
    guessesLeft--;

    console.log(event.key);
    console.log(guessedLetters);

    //make user guess lower case so it will not be case sensitive. (happened to me... that is time I'll never get back haha)
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    //push the guessed letter to userGuess, update var functions.
    guessedLetters.push(userGuess);
    newGuessesLeft();
    newGuessesSoFar();

    //when user still has guesses remaining and get letter, they win. if they have no guesses left, they lose.
    if (guessesLeft > 0) {
        if (userGuess == letterToGuess) {
            wins++;
            document.querySelector('#win').innerHTML = "Wins: " + wins;
            alert("Whoop there it is try again!");
            reset();
        }
    } else if (guessesLeft == 0) {
        losses++;
        document.querySelector('#loss').innerHTML = "Losses: " + losses;
        alert("You should not gamble try again!");

        reset();
    }
};
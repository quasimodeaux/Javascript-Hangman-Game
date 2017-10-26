  // Declaring all of the variables in the array
var wordsArray = ["potato", "carrot", "tomato", "cabbage", "lettuce"];

var chosenWord = "";

var lettersInChosenWord = [];

var numBlanks = 0;

var blanksandSuccesses = [];

var wrongGuesses = [];


var guessesleft = 9;
var wins = 0;
var losses = 0;

function startGame() {
    chosenWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    guessesleft = 9;
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;

    console.log("chosen word", chosenWord);

    blanksandSuccesses = [];

    wrongGuesses = [];


    for (var i = 0 ; i < numBlanks ; i++) {
        blanksandSuccesses.push("_");
    }
    console.log(blanksandSuccesses);

}


startGame();
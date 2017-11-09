  // Declaring all of the variables in the array
var wordsArray = ["mic", "kanyewest", "jayz", "amine", "wax", "liluzivert", "ghostfacekillah","methodman", "beyonce", "playboicarti","teegrizzley"];

var chosenWord = "";

var lettersInChosenWord = [];

var numBlanks = 0;

var blanksThatWork = [];

var wrongGuesses = [];




var guessesleft = 10;
var wins = 0;
var losses = 0;

function begin() {
    chosenWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    guessesleft = 10;

    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;

    console.log("chosen word", chosenWord);

    blanksThatWork = [];

    wrongGuesses = [];


    for (var i = 0 ; i < numBlanks; i++) {
        blanksThatWork.push("_");
    }
    console.log(blanksThatWork);

    $("#guesses-left").html(guessesleft);
    $("#word-blanks").html(blanksThatWork.join(" "));
    $("#wrong-guesses").html(wrongGuesses.join(" "));


}

function checkLetters(letter) {
    var letterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {
            letterInWord = true;
        }
    }


    if (letterInWord) {
        for (var l = 0; l < numBlanks; l++) {
            if (chosenWord[l] === letter) {
                blanksThatWork[l] = letter;
            }
        }

        console.log(blanksThatWork);
    }
    else {
        wrongGuesses.push(letter);
        guessesleft--;
    }

}


function finishRound(){
    console.log("WinsCounter: " + wins + " | LossCounter: " + losses + " |# Guesses: " +guessesleft);

    $("#guesses-left").html(guessesleft);
    $("#word-blanks").html(blanksThatWork.join(" "));
    $("#wrong-guesses").html(wrongGuesses.join(" "));

    if(lettersInChosenWord.toString() === blanksThatWork.toString()) {
        wins++;
        alert("you win");

        $("#win-counter").html(wins);
        begin();
    }

    else if (guessesleft === 0) {
        losses++;
        alert("you lose");


        $("#loss-counter").html(losses);
        begin();
    }
}

begin();

  document.onkeyup = function(event) {
      let letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

      checkLetters(letterGuessed);

      finishRound();
  };


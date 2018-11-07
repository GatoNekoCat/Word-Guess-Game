
// gameState Object
    var gameState = {
        wins: 0,
        gameStateOn: false,
        guessesLeft: 0,
        lettersGuessed: "",
        wordBankArray: [
            "son goku","bulma","master roshi",
            "krillin","piccolo","son gohan","tenshinhan", "namek", "freiza",
            "bardock", "vegeta",
            ],
        


    // Choose a random word
    chooseRandomWord: function(wordsArray) {
        var randWord = gameState.wordBankArray[Math.floor(Math.random() * gameState.wordBankArray.length)];

        return randWord;
    },
    word: gameState.chooseRandomWord(gameState.wordBankArray),
    // blankSpaceForLetters: function(word) {
        
    // }



// end of gameState object
};

var word = gameState.chooseRandomWord(gameState.wordBankArray) ;

console.log(word);


// gameState.onkeypress = gameOn() {
//     gameState.gameStateOn = true;


// };

// gameState.onkeypress = function(){myScript};

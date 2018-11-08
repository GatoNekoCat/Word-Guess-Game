// event listener for the button
var playerInput = "";
document.getElementById("guessButton").addEventListener("click", function(){
   var playerInput = document.getElementById("guessLetter");
});



// gameState Object===========
    var gameState = {
    //  variables ============
        wins: 0,
        gameStateOn: false,
        guessesLeft: 0,
        lettersGuessed: "",
        wordBankArray: [
            "son goku","bulma","master roshi",
            "krillin","piccolo","son gohan","tenshinhan", "namek", "freiza",
            "bardock", "vegeta",
            ],
    // =================================================================


// 
//   *** Functions
    // Choose a random word ***is now returning the whole array??**
    chooseRandomWord: function() {
        var randWord = gameState.wordBankArray[Math.floor(Math.random() * gameState.wordBankArray.length)];

        return this.wordBankArray;
    },

    // lettersGetter gets letters from the word
    lettersGetter: function(word){
        var letters = [];
        for(var i = 0; i < word.length; i++){
            letters.push({
                letter: word[i],
                pos: i
            });
        }
        return letters;
    },

    //  This will take in an array of letters from the lettersGetter and Produce 
    //   a blank space on the screen for each index in the array.
    textPlaceHolder: function(lettersArray){
        for (i = 0; i < lettersArray.length;i++){
            lettersArrayLength = [" "];
            lettersArray.push("_ ");
        }
    },


        
    // }



// end of gameState object
};

// var word = gameState.chooseRandomWord(gameState.wordBankArray) ;

// console.log(word);


// gameState.onkeypress = gameOn() {
//     gameState.gameStateOn = true;


// };

// gameState.onkeypress = function(){myScript};

// guessButton listener
document.getElementById("guessButton").onclick = function() {gameState.getPlayerInput()};
// gameState Object===========    

    var gameState = {
    //  variables ============
        wins: 0,
        gameStateOn: false,
        guessesLeft: 12,
        lettersGuessed: "",
        wordBankArray: [
            "son goku","bulma","master roshi",
            "krillin","piccolo","son gohan","tenshinhan", "namek", "freiza",
            "bardock", "vegeta", "brolly", "paragus", "videl"
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

    // Need to display the lettersArray to id="textField"
    textPusher: function (tArray) {
        tArray.forEach(function(element) {
            tArray.push (document.getElementById("textField").value) 
        });
    },


    //  listener should call this
    // Takes user input from the button ***returning "" ***
    getPlayerInput: function(){
        var playerInput = document.getElementById("guessLetter").textContent;
        console.log(playerInput);

        // After getting input the game should check whether the input matches a letter 
        // in the lettersArray
    },
    

        
    // }



// end of gameState object
};

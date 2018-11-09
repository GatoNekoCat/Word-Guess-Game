// guessButton listener
document.getElementById("guessButton").onclick = function() {gameState.getPlayerInput()};
//  Load a random word on load

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
        randWord: "",
        lettersArray: [],

    // =================================================================


// 
//   *** Functions    
    

    // Choose a random word 
    chooseRandomWord: function() {
        var randWord = gameState.wordBankArray[Math.floor(Math.random() * gameState.wordBankArray.length)];
        return randWord;
    },

    // lettersGetter gets letters from the word
    lettersGetter: function(word){
        var letters = [];
        for(var i = 0; i < word.length; i++){
            letters.push({
                letter: word[i],
                pos: i,
            });
        }
        return letters;
    },

    //  This will take in an array of letters from the lettersGetter and Produce 
    //   an underscore on the screen for each index in the array.
    textPlaceHolder: function(lettersArray){
        var newArray = [" "];
        for (i = 0; i < lettersArray.length;i++){
            
            newArray.push("_ ");
            
        }
        return newArray;
    },
    // I want it to be an array because I will check player guesses with a foreach method

    // Need to display the lettersArray to id="textField"
    // textField stores the html element
    textField: document.getElementById("textField"),
    textDisplay:function(textToDisplay) {
        textField.innerHTML = ("<h1>" + textToDisplay.join(" ") + "</h1>");

    },
     
    textArrayToString: function (tArray) {
        var tString = tArray.forEach(function(element) {
            var newString = element + tString;
            tString = newString;
            
        });          

    },


    //  listener should call this
    // Takes user input from the button ***returning "" ***
    getPlayerInput: function(){
        var playerInput = document.getElementById("guessLetter").value;

        },
    
        // After getting input the game should check whether the input matches a letter 
        // in the lettersArray   
    

        
    // }

    



// end of gameState object
};
// load in a word with the page
var gameWord = gameState.chooseRandomWord();
var lettersArray = gameState.lettersGetter(gameWord);
var nArray = gameState.textPlaceHolder(lettersArray);
// var playerInput = gameState.
// Old textPlaceHolder will remove soon
// // textPlaceHolder takes in lettersArray and then for each letter, or element in the array
// // it should....
// var textPlaceHolder = lettersArray.forEach(function(element){
//     console.log(element)
//     // create a variable array
//     var textPlaceHolder = [""];
//     // add another the array with an underscore
//     textPlaceHolder.push(" _");
// });



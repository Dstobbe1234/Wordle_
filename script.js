let firstGuess = document.getElementById("g1");
let secondGuess = document.getElementById("g2");
let thirdGuess = document.getElementById("g3");
let fourthGuess = document.getElementById("g4");
let fifthGuess = document.getElementById("g5");
let aBtn = document.getElementById("aBtn");
let bBtn = document.getElementById("bBtn");
let cBtn = document.getElementById("cBtn");
let buttonClicked;
let submitOrder = [firstGuess, secondGuess, thirdGuess, fourthGuess, fifthGuess];
let submitLoop  = [0, 1, 2, 3, 4];
let letterCheck = 0;
let splicedSubmitLoop = submitLoop.splice(letterCheck, 1)
let possibleWords = ["APPLE", "READY", "DEATH", "AUDIO", "BOILS"];
let randomInt = Math.random() * (4 - 0);
let randomFlt = randomInt.toFixed();
let randomWord = possibleWords[randomFlt];
let numberOfGuesses = 0;



document.getElementById("wordle").innerHTML = randomWord;
aBtn.addEventListener("click", () => {
    buttonClicked = "A"
    guess()
});
bBtn.addEventListener("click", () => {
    buttonClicked = "B"
    guess()
});
cBtn.addEventListener("click", () => {
    buttonClicked = "C"
    guess()
});
document.getElementById("enter").addEventListener("click", submit);
function guess() {
    if (numberOfGuesses === 0) {
        firstGuess.innerHTML = buttonClicked;
        numberOfGuesses ++;
    } else if (numberOfGuesses === 1) {
        secondGuess.innerHTML = buttonClicked;
        numberOfGuesses ++;
    } else if (numberOfGuesses === 2) {
        thirdGuess.innerHTML = buttonClicked;
        numberOfGuesses ++;
    } else if (numberOfGuesses === 3) {
        fourthGuess.innerHTML = buttonClicked;
        numberOfGuesses ++;
    } else if (numberOfGuesses === 4) {
        fifthGuess.innerHTML = buttonClicked;
        numberOfGuesses ++;
    }
}

function submit() {
    if (numberOfGuesses === 5) {
        for (letterCheck; letterCheck <= 4; letterCheck ++) { 
            if (submitOrder[letterCheck].innerHTML === randomWord[letterCheck]) {  
                submitOrder[letterCheck].style.backgroundColor = "rgb(0, 255, 0)" 
            } else if (submitOrder[letterCheck].innerHTML === randomWord[submitLoop[0]] || submitOrder[letterCheck].innerHTML === randomWord[submitLoop[1]] || submitOrder[letterCheck].innerHTML === randomWord[submitLoop[2]] || submitOrder[letterCheck].innerHTML === randomWord[submitLoop[3]]) {
                let wordIndex = randomWord.indexOf(submitOrder[letterCheck].innerHTML)
                if (submitOrder[submitLoop[0]].innerHTML === randomWord[wordIndex] || submitOrder[submitLoop[1]].innerHTML === randomWord[wordIndex] || submitOrder[submitLoop[2]].innerHTML === randomWord[wordIndex] || submitOrder[submitLoop[3]].innerHTML === randomWord[wordIndex]) {
                    alert("EEE")
                    submitOrder[letterCheck].style.backgroundColor = "grey"
                } else {
                    submitOrder[letterCheck].style.backgroundColor = "rgb(255, 255, 0)"
                }
            } else {
                submitOrder[letterCheck].style.backgroundColor = "grey"
            } 
        }
    }
}   

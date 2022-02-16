let firstGuess = document.getElementById("g1");
let secondGuess = document.getElementById("g2");
let thirdGuess = document.getElementById("g3");
let fourthGuess = document.getElementById("g4");
let fifthGuess = document.getElementById("g5");
let aBtn = document.getElementById("aBtn");
let bBtn = document.getElementById("bBtn");
let cBtn = document.getElementById("cBtn");
let buttonClicked;

let possibleWords = ["Apple", "Ready", "Death", "Audio", "Boils"];
let randomInt = Math.random() * (4 - 0);
let randomFlt = randomInt.toFixed();
let randomWord = possibleWords[randomFlt];
let numberOfGuesses = 0;


document.getElementById("wordle").innerHTML = randomWord;
aBtn.addEventListener("click", event => {
    buttonClicked = "A"
    guess()
});
bBtn.addEventListener("click", event => {
    buttonClicked = "B"
    guess()
});
cBtn.addEventListener("click", event => {
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
    console.log(firstGuess.innerHTML);
    if (numberOfGuesses === 5)
        if (firstGuess.innerHTML === randomWord[0]) {
            firstGuess.style.backgroundColor = "rgb(0, 255, 0)"
        } else if (firstGuess.innerHTML === randomWord[1] || firstGuess.innerHTML === randomWord[2] || firstGuess.innerHTML === randomWord[3] || firstGuess.innerHTML === randomWord[4]) {
            firstGuess.style.backgroundColor = "rgb(255, 255, 0)"
        } else {
            firstGuess.style.backgroundColor = "grey"
        }

        if (secondGuess.innerHTML === randomWord[1]) {
            secondGuess.style.backgroundColor = "rgb(0, 255, 0)"
        } else if (secondGuess.innerHTML === randomWord[0] || secondGuess.innerHTML === randomWord[2] || secondGuess.innerHTML === randomWord[3] || secondGuess.innerHTML === randomWord[4]) {
            if (firstGuess.innerHTML !== secondGuess.innerHTML) {
                secondGuess.style.backgroundColor = "rgb(255, 255, 0)"
            } else {
                secondGuess.style.backgroundColor = "grey"
            }
        } else {
            secondGuess.style.backgroundColor = "grey"
        }
}

var wins = 0;
var losses = 0;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = null;
var guessesRemaining = 9;
//
computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)]
console.log(computerGuess)

document.onkeyup = function (event) {
    console.log(event.key)
    if (guessesRemaining > 0 && event.key === computerGuess) {
        document.getElementById("gameResult").innerHTML = "You won!"
        wins++
        document.getElementById("wins").innerHTML = wins
        setTimeout(resetGame, 3000)
    } else if (guessesRemaining <= 0) {
        document.getElementById("gameResult").innerHTML = "You lost!"
        losses++
        document.getElementById("losses").innerHTML = losses
        setTimeout(resetGame, 3000)
    } else {
        guessesRemaining--
        document.getElementById("guesses-left").innerHTML = guessesRemaining
    }
    document.getElementById("guesses-so-far").append(event.key + ", ")
}

function resetGame() {
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)]
    guessesRemaining = 9
    document.getElementById("guesses-so-far").innerHTML = ""
    document.getElementById("gameResult").innerHTML = ""
    console.log("computerGuess: " + computerGuess)
}
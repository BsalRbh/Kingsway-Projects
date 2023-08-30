
let score = JSON.parse(localStorage.getItem('score'))
|| {
wins: 0,
losses: 0,
Ties: 0,
}
updateScoreElement()
function playGame(playerMove) {
const computerMove = pickComputerMove();
let result = '';

if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
        result = 'You Lose.';
    } else if (computerMove === 'Paper') {
        result = 'You Win.';
    } else if (computerMove === 'Scissors') {
        result = 'It is a Tie.';
    }
} else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
        result = 'You Win.';
    } else if (computerMove === 'Paper') {
        result = 'It is a Tie.';
    } else if (computerMove === 'Scissors') {
        result = 'You Lose.';
    }
} else if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
        result = 'It is a Tie.';
    } else if (computerMove === 'Paper') {
        result = 'You Lose.';
    } else if (computerMove === 'Scissors') {
        result = 'You Win.';
    }
}
if (result === 'You Win.') {
    score.wins += 1;
}
else if (result === 'You Lose.') {
    score.losses += 1;
}
else if (result === "It is a Tie.") {
    score.Ties += 1;
}
updateScoreElement()
document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-moves').innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}`;
}

// function to update score 
function updateScoreElement() {
localStorage.setItem('score', JSON.stringify(score))
document.querySelector('.js-score')
    .innerHTML = `Wins:${score.wins},Loses:${score.losses},
    Ties:${score.Ties}`

}
// To pick computer move use randomNumber which generate number between 0 to 1.
function pickComputerMove() {
const randomNumber = Math.random();
let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
} else {
    computerMove = 'Scissors';
}

return computerMove;
}
console.log(score)
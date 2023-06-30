'use strict';
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const playerScoreid1 = document.getElementById('score--0');
const playerScoreid2 = document.getElementById('score--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');


let playingState = true;
let playerScore1 = 0;
let playerScore2 = 0;
let currentScore = 0;
let activePlayer = 0;
const score = [0, 0];


function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = '0';
    currentScore = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
}

// Intitial Conditions;
playerScoreid1.textContent = playerScore1;
playerScoreid2.textContent = playerScore2;

btnRoll.addEventListener('click', function () {
    if (playingState === true) {
        const ranNum = Math.trunc(Math.random() * 6 + 1);
        console.log(ranNum);
        dice.classList.remove('hidden');
        dice.src = `./images/dice-${ranNum}.png`;
        if (ranNum !== 1) {
            currentScore += ranNum;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        }
        else {
            switchPlayer();

        }

    }
})

function Winner() {
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

    document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
    document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
    dice.classList.add('hidden');
    document.querySelector(`#name--${activePlayer}`).textContent = "Winner";

    playingState = false;

}

btnHold.addEventListener('click', function () {
    if (playingState === true) {
        score[activePlayer] += currentScore;
        if (score[activePlayer] < 100) {
            document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
            switchPlayer();
        }
        else {
            Winner();

        }
    }

})


btnNew.addEventListener('click', function () {
    document.querySelector(`#name--${activePlayer}`).textContent = `Player ${activePlayer + 1}`;
    console.log("New game");
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
    currentScore = 0;
    document.querySelector(`.player--${activePlayer}`).classList.add("player--active");
    score[0] = 0;
    score[1] = 0;
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    score0.textContent = '0';
    score1.textContent = '0';
    playingState = true;


})


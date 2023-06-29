// console.log(document.querySelector(".message").textContent="Correct Number");
'use strict';
console.log("Abhinav");

let preScore = 20;
const num = Math.trunc(Math.random() * 100 + 1);
console.log(num);

document.querySelector('.check').addEventListener('click', function () {
    const input = Number(document.querySelector('.input').value);

    // For no input
    if (!input) {
        document.querySelector('.message').textContent = "No number";
    }

    if (preScore > 1) {
        if (input > num) {
            document.querySelector('.message').textContent = "Too HIGH";
            preScore--;
            document.querySelector('.score').textContent = preScore;
        }
        // When Player Wins
        else if (input == num) {
            document.querySelector('.message').textContent = "Correct";
            document.querySelector('body').style.backgroundColor = '#60f16f';
        }
        else {
            document.querySelector('.message').textContent = "Too LOW";
            preScore--;
            document.querySelector('.score').textContent = preScore;
        }
    }
    else {
        document.querySelector('.message').textContent = "You Loose";
        document.querySelector('.score').textContent = preScore - 1;


        alert("You Loose");
    }




})
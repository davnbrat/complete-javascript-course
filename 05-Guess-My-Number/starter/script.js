'use strict';

let number = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

const displayMesssage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  guess = Number(guess);

  if (!guess) {
    displayMesssage('Not a Number');
  } else if (guess === number) {
    displayMesssage('Correct');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMesssage(guess > number ? 'Too High!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMesssage('You lost the game!');
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMesssage('Start Guessing..');
  document.querySelector('.guess').value = '';
});

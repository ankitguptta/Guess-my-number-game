'use strict';

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//function to display msg
const displaymessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //when no guess
  if (!guess) {
    displaymessage('NO Number!');
  }
  //player wins
  else if (secretnumber === guess) {
    displaymessage('Correct Number! 🎈');
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  }
  //when guess is too high or too low
  else if (guess !== secretnumber) {
    if (score > 1) {
      displaymessage(guess > secretnumber ? '📉Too High' : '📈Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('You Loose the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretnumber;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  displaymessage('Start guessing...');
});

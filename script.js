'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! 🎈';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displaymessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

//document.querySelector('.number').textContent = secretnumber;
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
  //when guess is too high
  else if (guess !== secretnumber) {
    if (score > 1) {
      displaymessage(guess > secretnumber ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('You Loose the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretnumber;
    }
  }
  /*else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Loose the game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretnumber;
    }
  }
  //when guess is too high
  else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Loose the game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretnumber;
    }
  }*/
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

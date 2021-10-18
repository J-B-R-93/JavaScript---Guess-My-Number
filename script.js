'use strict';

let gameScore = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //   If no input in guess (!guess is converting fasly (0 value) to false)
    // document.querySelector('.message').textContent = '⛔ No Number guessed!';
    displayMessage('⛔ No Number guessed!');
  } else if (guess === secretNumber) {
    //   If guess is correct
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // document.querySelector('.message').textContent = '🎉 You Guess is correct!';
    displayMessage('🎉 You Guess is correct!');

    // Highscore update
    if (gameScore > highscore) {
      highscore = gameScore;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    //   Guess not equal to
    if (gameScore > 1) {
      gameScore--;
      document.querySelector('.score').textContent = gameScore;
      //   document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Guess too high!' : 'Guess too low!';
      displayMessage(
        guess > secretNumber ? 'Guess too high!' : 'Guess too low!'
      );
    } else {
      //Attempts over, game over
      document.querySelector('body').style.backgroundColor = '#bb2e29';
      document.querySelector('.score').textContent = 0;
      //   document.querySelector('.message').textContent =
      //     '💥 Attempts are over, you lose!';
      displayMessage('💥 Attempts are over, you lose!');
    }
  }
});

// Resetting the game
document.querySelector('.again').addEventListener('click', function () {
  // Resetting the look of the game
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  //   Resetting the data of the game
  gameScore = 20;
  document.querySelector('.score').textContent = gameScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

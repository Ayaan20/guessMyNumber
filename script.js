'use strict';

// here we will define a random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// display the number

document.querySelector('.check').addEventListener('click', function () {
  // we take user input from it .
  const guess = Number(document.querySelector('.guess').value);

  // if there is no input
  if (!guess) {
    document.querySelector('.message').textContent = ' ⛔ No Number Entered ';
    //correct number guessed
  } else if (secretNumber === guess) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    let highScore = Number(document.querySelector('.highscore').textContent);
    // if score > highscore then update the highscore
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }

    //wrong number guessed
  } else if (guess <= 0 || guess > 20) {
    {
      document.querySelector('.message').textContent =
        'Invalid Number , please enter between 1 and 20';
      if (score > 0) {
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#E62020';
        document.querySelector('.message').textContent = '💥 You lost';
      }
    }
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High';
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#E62020';
      document.querySelector('.message').textContent = '💥 You lost';
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low';
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#E62020';
      document.querySelector('.message').textContent = '💥 You lost';
    }
  }
});

// resetting the game with again button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing ...';
  document.querySelector('.guess').textContent = 0;
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
});

'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highScore =0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // When there is no input
  if (!guess) {
    displayMessage('🛑 No Number');
  }

  // When player wins
  else if (guess === number) {
    displayMessage('🎉 Correct Guess');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;

    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

else if(guess!==number){
  if (score > 1) {
   // document.querySelector('.message').textContent = guess > number ?'📈 Too High' : '📉 Too Low';
   displayMessage(guess > number ?'📈 Too High' : '📉 Too Low');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    //document.querySelector('.message').textContent = '😫 You Lost';
    displayMessage('😫 You Lost')
  }
}
/*
  // When guess is too high
  else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = guess > number ?'📈 Too High' : '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😫 You Lost';
    }

    //When guess is too low
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😫 You Lost';
      document.querySelector('.score').textContent = '0';
    }
  } */
});


document.querySelector('.again').addEventListener('click' , function(){
   number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
   document.querySelector('body').style.backgroundColor= "#222";
   //document.querySelector('.message').textContent = 'Start guessing...';
   displayMessage('Start guessing...');
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').textContent='?';
   document.querySelector('.guess').value='';


})


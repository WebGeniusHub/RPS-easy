let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let demo = document.getElementById('demo');
let resultElement = document.getElementById('result');
let resElement = document.getElementById('res');

let choice = ['rock', 'paper', 'scissors'];
let cpimage = ["assets/rock.png", "assets/paper.png", "assets/scissors.png"];

rock.addEventListener('click', function() {
  playGame('rock');
});

paper.addEventListener('click', function() {
  playGame('paper');
});

scissors.addEventListener('click', function() {
  playGame('scissors');
});

function playGame(userChoice) {
  let mathe = Math.floor(Math.random() * 3);
  let computerChoice = choice[mathe];
  demo.innerHTML = computerChoice;
  resElement.src = cpimage[mathe];

  if (userChoice === computerChoice) {
    resultElement.textContent = 'Draw';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    resultElement.textContent = 'You Win';
  } else {
    resultElement.textContent = 'You Lose';
  }
}

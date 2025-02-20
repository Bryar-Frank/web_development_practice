const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1score'),
}

const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2score'),
}


const btnReset = document.querySelector('#reset');
const playTo = document.querySelector('#playTo');


let winningScore = parseInt(playTo.value);
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    if (++player.score == winningScore) {
      isGameOver = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
    }
    player.display.innerText = player.score;
  }
}

function resetGame() {
  resetPlayers(p1, p2);
  isGameOver = false;
}

function resetPlayers(...players) {
  for (let player of players) {
    player.score=0;
    player.display.innerText = 0;
    player.display.classList.remove('has-text-success', 'has-text-danger');
  }
}

p1.button.addEventListener('click', function () {
  updateScore(p1, p2);
});

p2.button.addEventListener('click', function () {
  updateScore(p2, p1);
});

btnReset.addEventListener('click', resetGame);

playTo.addEventListener('change', function (e) {
  winningScore = parseInt(playTo.value);
  resetGame();
});
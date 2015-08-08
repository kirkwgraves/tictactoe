
var playerOne = true;
var playerTwo = false;

var cell0 = document.getElementById('cell0');
var cell1 = document.getElementById('cell1');
var cell2 = document.getElementById('cell2');
var cell3 = document.getElementById('cell3');
var cell4 = document.getElementById('cell4');
var cell5 = document.getElementById('cell5');
var cell6 = document.getElementById('cell6');
var cell7 = document.getElementById('cell7');
var cell8 = document.getElementById('cell8');

var outputEl = document.getElementById('tictac');
var cells = outputEl.getElementsByTagName('td');

function userClick () {
  if (playerOne) {
    this.innerHTML = 'X';
    playerOne = false;
    playerTwo = true;
  } else if (playerTwo) {
    this.innerHTML = 'O';
    playerTwo = false;
    playerOne = true;
  }
}

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", userClick);
}



// Variables for DOM elements 

var playerX = true;
var playerO = false;


var x_wins = 0;
var o_wins = 0;

var playerX_results = document.getElementById("playerX");
var playerO_results = document.getElementById("playerO");

var td0 = document.getElementById('cell0');
var td1 = document.getElementById('cell1');
var td2 = document.getElementById('cell2');
var td3 = document.getElementById('cell3');
var td4 = document.getElementById('cell4');
var td5 = document.getElementById('cell5');
var td6 = document.getElementById('cell6');
var td7 = document.getElementById('cell7');
var td8 = document.getElementById('cell8');

var outputEl = document.getElementById('tictac');

var cells = outputEl.getElementsByTagName('td');

var clearButton = document.getElementById('reset');

var winCombos = [[td0, td1, td2], [td3, td4, td5], [td6, td7, td8], [td0, td3, td6], [td1, td4, td7], [td2, td5, td8], [td0, td4, td8], [td2, td4, td6]];



// Function to handle cell clicks and switch between playerX and playerO

function userClick (e) {
  if (this.innerText === '') {
  
    if (playerX) {
      this.innerHTML = 'X';
      playerX = false;
      playerO = true;
    } else if (playerO) {
      this.innerHTML = 'O';
      playerO = false;
      playerX = true;
  }
      checkForWinner();
  }
}


// Add event handler for clicking on cells

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', userClick);
}



// Add event handler for button to reset board

function resetClick(e) {
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}

clearButton.addEventListener('click', resetClick);



// Add function to check for winner of game

function checkForWinner(){
  console.log("Hello from inside checkForWinner");

  for (var i = 0; i < winCombos.length; i++) {
    if (winCombos[i][0].innerText === 'X' && winCombos[i][1].innerText === 'X' && winCombos[i][2].innerText === 'X') {
      alert('Congratulations, X: YOU WIN!');
      x_wins += 1;
      playerX_results.innerText = x_wins;
      resetClick();
    } else if (winCombos[i][0].innerText === 'O' && winCombos[i][1].innerText === 'O' && winCombos[i][2].innerText === 'O') {
      alert('Congratulations, O: YOU WIN!');
      o_wins += 1;
      playerO_results.innerText = o_wins;
      resetClick();
    }
  }
}











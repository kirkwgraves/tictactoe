var board = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 9], [2, 4, 6]];

var a = document.

function checkRow(a, b, c) {
    if (a === 'X' && b === 'X' && c === 'X') {
        return 1;
    } else if (a === 'O' && b === 'O' && c === 'O') {
        return -1;
    } else {
        return 0;
    }
}
function checkWin(winSolutions) {
  for (var i = 0; i <= board.length; i++) {
  if (var x === board[i]) {
  	alert("Congratulations! You're officially a cheater!");
  }
  else {
  	alert("Everyone Loses")
  }
  function checkWin(board) {
    return checkRow(board[0], board[1], board[2]) 
        + checkRow(board[3], board[4], board[5])
        + checkRow(board[6], board[7], board[8])
        + checkRow(board[0], board[3], board[6]) 
        + checkRow(board[1], board[4], board[7])
        + checkRow(board[2], board[5], board[8])
        + checkRow(board[0], board[4], board[8]) 
        + checkRow(board[2], board[4], board[6]); 
}

function addEvent() {

}

let board = ['','','','','','','','',''];
let playerTurn = 0;
let symbols = ['o', 'x'];
let gameOver = false;
let winnerMoves = [
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [6,4,2]
]

function handleMove(position){

  if(gameOver){
    return;
  }

  // trata para que adicione o símbolo somente se o quadrado em questão estiver vazio, caso já tenha algum símbolo, ele não substitui o símbolo por outro.
  if(board[position] == ''){
    board[position] = symbols[playerTurn];

    gameOver = winner();
  
    if(gameOver == false){
      playerTurn = (playerTurn == 0)?1:0;
    }
  }
  return gameOver;
}
function winner(){

  for(let i = 0; i < winnerMoves.length; i++){
    let seq = winnerMoves[i];

    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    if(board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != ''){
        return true;
      }
  }
  return false;
}

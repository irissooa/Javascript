/**
<입출력 예시>

**입력**

0 0 0 0 0
0 1 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 1 0

**출력**

3 X 3

0 0 # # #
0 1 # # #
0 1 # # #
0 0 1 0 0
0 0 0 1 0

**입력**

0 0 0 1 0
0 0 0 0 0
0 0 1 0 0
0 0 1 0 0
0 0 0 1 0

**출력**

2 X 2

# # 0 1 0
# # 0 0 0
1 0 1 0 0
0 0 1 0 0
1 0 0 1 0


*/

const board = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0]];

function solution(board){
  const W = board[0].length;
  const H = board.length;

  let SUM = [];
  for (let i=0; i<board.length; i++){
    SUM.push(Array(board.length).fill(0));
  }

  for(let i=0; i<H; i++){
    for(let j=0; j<W; j++){
      if (board[i][j] == 0){
        SUM[i][j] = 1;
      } else {
        SUM[i][j] = 0;
      }
    }
  }

  for(let i=1; i<H; i++){
    for(let j=1; j<W; j++){
      if (SUM[i][j] == 1){
        let min;
        if(SUM[i-1][j] > SUM[i][j-1]){
          min = SUM[i][j-1];
        } else if (SUM[i-1][j-1] > SUM[i-1][j]) {
          min = SUM[i-1][j];
        } else {
          min = SUM[i-1][j-1]
        }
        SUM[i][j] = min + 1;
      }
    }
  }

  let maxValue = 0;
  let x = 0;
  let y = 0;

  for (let i=0; i<H; i++){
    for (let j=0; j<W; j++){
      if (maxValue < SUM[i][j]){
        maxValue = SUM[i][j]
        x = i
        y = j
      }
    }
  }

  // console.log(maxValue, x, y);
  console.log(maxValue, 'X', maxValue);

  for(let i=x - (maxValue - 1); i<x+1; i++){
    for(let j=y - (maxValue - 1); j<y + 1; j++){
      board[i][j] = '#';
    }
  }

  return board;
}

console.log(solution(board));

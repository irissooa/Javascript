
/**
 * 빈 종이에 stamp 모양으로 생긴 도장을 90*k 도로 회전하며 찍습니다. 도장은 N*N 크기이며 각 도장이 찍히는 부분은 1 이상의 자연수와 도장이 찍히지 않는 부분은 0으로 이루어져 있습니다.

도장의 크기 N과,
종이에 찍힌 도장 횟수를 표현한 stmp 배열과,
얼마만큼 회전할 것인지를 알려주는 회전수 k를 입력받았을 때 각 위치에서 몇 번 도장이 찍혔는지 그 결과값을 출력하세요.
입력

도장 = [
[1,1,1,2],
[2,0,0,0],
[1,1,1,1],
[0,0,0,0]]

회전 = 1


출력

[[1, 2, 3, 3], [2, 1, 0, 1], [1, 2, 1, 2], [0, 1, 0, 2]]
 */

// 기본 입력부분입니다
// N, stmp, k를 입력받습니다.

let N = parseInt(prompt('도장의 크기를 입력하세요.'), 10);

let stmp = [];
// stmp = [
//   [1,1,1,2],
//   [2,0,0,0],
//   [1,1,1,1],
//   [0,0,0,0]];
for (let i = 0; i < N; i++){
  let tmp = prompt('도장을 입력하세요').split(' ').map(x => parseInt(x, 10));
  stmp.push(tmp);
}

const k = parseInt(prompt('회전수를 입력하세요'), 10);

function solution(stmp,n) {
  N = stmp.length;
  // 0으로 만들어진 배열 생성
  let p = [];
  for(let i = 0; i < N; i++){
    p.push(Array(N).fill(0));
  }

  // 회전시키기 전 최초 1번찍어주기
  p = sum_matrix(p, stmp);

  //회전시키며 도장찍기
  for(let i = 0; i < n; i++) {
    stmp = rotate(stmp);
    p = sum_matrix(p, stmp);
  }
  return p;
}

//배열(도장) 회전시키기
function rotate(stmp){
  N = stmp.length;
  let rot = [];
  for(let i = 0; i < N; i++){
    rot.push(Array(4).fill(0));
  }

  for (let i = 0; i < N; i++){
    for (let j = 0; j < N; j++){
      rot[j][N-1-i] = stmp[i][j];
    }
  }
  return rot;
}

//행렬 더하기. 즉, 도장이 찍히는 정도를 더한다.
function sum_matrix(p,stmp){
  for(let i = 0; i < p.length; i++){
    for(let j = 0; j < p[0].length; j++){
      p[i][j] += stmp[i][j];
    }
  }
  return p;
}

console.log(solution(stmp, k));

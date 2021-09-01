/**
 * 
 * 사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요

예를들어
18234 = 1+8+2+3+4 이고 정답은 18 입니다.
3849 = 3+8+4+9 이고 정답은 24입니다.

 */
const numbers = prompt('양의 정수를 입력하세요').toString();
// const numbers = '18234'
let SUM = 0
for (let i = 0; i < numbers.length; i++) {
  SUM += Number(numbers[i]);
}
console.log(SUM)

/**
 * let n = prompt('숫자를 입력하세요.');
let sum = 0;

while(n !== 0){
  sum += (n % 10);
  n = Math.floor(n/10);
}

console.log(sum);
 */
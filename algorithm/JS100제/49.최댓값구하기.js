/**순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라. 
 * 
 * 입력 : 10 9 8 7 6 5 4 3 2 1
출력 : 10
*/
const numbers = prompt('숫자 10개를 입력하세요').split(' ');
// const numbers = '10 9 8 7 6 5 4 3 2 1'.split(' ')
let MAX = 0;

for (let i=0; i < numbers.length;i++) {
  if (Number(numbers[i]) > MAX) {
    MAX = Number(numbers[i]) 
  }
}
console.log(MAX)

/**
 * let numbers = prompt('10개의 숫자를 입력하세요').split(' ').map((n) => {
  return parseInt(n, 10);
});

numbers.sort((a, b) => {
  return b-a;
});

console.log(numbers[0]);
 */
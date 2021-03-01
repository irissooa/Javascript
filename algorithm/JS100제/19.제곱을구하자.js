/*
공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.
*/

const temp = prompt('두 수를 입력하세요').split(' ');

console.log(temp[0]**temp[1]);
// console.log(Math.pow(parseInt(temp[0],10),parseInt(temp[1],10)));

/*
const n = prompt('수를 입력하세요.').split(' ');

console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));
*/
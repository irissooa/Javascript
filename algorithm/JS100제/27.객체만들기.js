/*
첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

입력
Yujin Hyewon
70 100

출력
{'Yujin': 70, 'Hyewon': 100}
*/
const students = prompt('학생의 이름을 입력하세요').split(' ');
const mathScores = prompt('수학점수를 입력하세요').split(' ');

let studentObject = {};

for (let i=0; i< students.length; i++) {
  studentObject[students[i]] = mathScores[i];
}
console.log(studentObject);

/*
const keys = prompt('이름을 입력하세요').split(' ');
const values = prompt('점수를 입력하세요').split(' ');
const obj = {};

for (let i=0; i<keys.length; i++) {
  obj[keys[i]] = parseInt(values[i], 10);
}

console.log(obj);

*/
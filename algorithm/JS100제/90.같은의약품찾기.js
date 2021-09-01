/**의약품 성분이 총 8개인 약품들이 있습니다. 예를 들어 다음 데이터는 총 8개의 성분을 갖습니다.

판콜비 = 'ABCDEFGH'
넥타이레놀 = 'EFGHIJKL'

특정 약품 A의 성분이 공개되었을 때, 이와 유사한 성분을 가진 데이터들의 출력을 구하는 문제입니다.

입력 : 'ABCDEFGH' 4
데이터 : 'EFGHIJKL', 'EFGHIJKM', 'EFGHIJKZ' 등 1만 개의 데이터
출력 : 'EFGHIJKL', 'EFGHIJKM', 'EFGHIJKZ' 등 4개의 요소가 같은 약품 전부(4개 이상이 아니며 같은 요소가 4개인 것을 출력해야 합니다.)

* 해당 문제는 시간제한이 있습니다.
* 제약 데이터의 성분은 중복이 될 수 없습니다.
(예를 들어 'AAABBBAB'와 같은 데이터는 없습니다.)
 */

//아스키코드
let l = [];

for(let i=65; i<91; i++){
  l.push(String.fromCharCode(i));
}

//l에서 랜덤으로 8개 뽑은 후 리턴
function randomItem(a){
  let string = [];
  while(string.length !== 8){
    let b = a[Math.floor(Math.random()*a.length)];
    if(!string.includes(b)){
      string.push(b);
    }
  }
  let medicine = string.join('');

  return medicine;
}
//100개의 다른 의약성분 배열에 저장
let total_medicine = [];

for(let i=0; i<100; i++){
  let m = randomItem(l);
  if(!total_medicine.includes(m)){
    total_medicine.push(m);
  }
}
//user_input과 같은 성분이 있는 데이터 result에 저장
const user_input = prompt('입력하세요').split(' ');
let result = [];

for (let i of total_medicine) {
  //Set을 이용하여 교집합 구하기
  let setUser = new Set(user_input[0]);
  let setTotal = new Set(i);
  let interSection = new Set([...setUser].filter(x => setTotal.has(x)));
  //Set에서는 includes 또는 indexOf 대신 has()를 사용 - 값이 있는지 확인
  if(interSection.size === parseInt(user_input[1], 10)){
    result.push(i);
  }
}

console.log('result',result);
console.log(result.length);

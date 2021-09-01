/**문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

입출력

입력 : AAABBBcccddd
출력 : aaabbbCCCDDD
 */
const words = prompt('문자열을 입력하세요');
// const words = "AAABBBcccddd"
const change = [];
for (let i=0; i<words.length; i++) {
  if (words[i] === words[i].toLowerCase()) {
    change.push(words[i].toUpperCase());
  } else {
    change.push(words[i].toLowerCase());
  }
}
console.log(change.join(''))

/**
 * ```jsx
let a = prompt('문자열을 입력하세요.');
let b = [];
let s = '';

for (let i=0; i<a.length; i++){
	//toLowerCase() 메서드는 문자열을 소문자로, toUpperCase() 메서드는 문자열을 대문자로 변환하여 반환합니다.
  if(a[i] === a[i].toLowerCase()){
    b.push(a[i].toUpperCase());
  } else {
    b.push(a[i].toLowerCase());
  }
}

for (let j=0; j<b.length; j++){
  s += b[j];
}

console.log(s);
```
 */
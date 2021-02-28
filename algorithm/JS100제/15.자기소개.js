/*
신학기가 시작되고, 아이들이 돌아가면서 자기소개를 하기로 했습니다.

만약 입력으로 `김다정`이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력하게 
해주세요.
*/
const name = prompt('이름을 입력해주세요');
const ans = `안녕하세요. 저는 ${name}입니다.`;
console.log(ans);

/*
const name = prompt('이름을 입력하세요.');

console.log(`안녕하세요. 저는 ${name}입니다.`); 
/*
* es6부터는 backtick 문자열(``) 안에서 $와 중괄호로 표현식을 사용할 수 있습니다. 
* 이를 템플릿 리터럴(Template literals)이라 합니다.
*/
*/
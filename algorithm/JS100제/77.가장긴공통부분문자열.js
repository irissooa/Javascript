/**
 * **가장 긴 공통 부분 문자열(Longest Common Subsequence)**이란 A, B 두 문자열이 주어졌을 때 두 열에 공통으로 들어 있는 요소로 만들 수 있는 가장 긴 부분열을 말합니다. 여기서 부분열이란 다른 문자열에서 몇몇의 문자가 빠져 있어도 순서가 바뀌지 않은 열을 말합니다.

예를 들어 S1 = ['T', 'H', 'I', 'S', 'I', 'S', 'S', 'T', 'R', 'I', 'N', 'G', 'S']  S2 = ['T', 'H', 'I', 'S', 'I', 'S']라는 두 문자열이 있을 때 둘 사이의 부분 공통 문자열의 길이는 ['T', 'H', 'I', 'S', 'I', 'S']의 6개가 됩니다.

이처럼 **두 문자열이 주어지면 가장 긴 부분 공통 문자열의 길이를 반환하는 프로그램**을 만들어 주세요.

두 개의 문자열이 한 줄에 하나씩 주어집니다. 문자열은 알파벳 대문자로만 구성되며 그 길이는 100글자가 넘어가지 않습니다.

출력은 이 두 문자열의 가장 긴 부분 공통 문자열의 길이를 반환하면 됩니다.
**- Test Case -**

**입력**
THISISSTRINGS
THISIS

**출력**
6

-

**입력**
THISISSTRINGS
TATHISISKKQQAEW

**출력**
6

-

**입력**
THISISSTRINGS
KIOTHIKESSISKKQQAEW

**출력**
3

-

**입력**
THISISSTRINGS
TKHKIKSIS

**출력**
3
 */

function sol(string){
    let result = [];
    for (let i=1; i<string.length+1; i++){
        for (let j=0; j<i; j++){
            result.push(string.slice(j, j+string.length-i+1));
        }  
    }
    return result;
}
    
const inputOne = prompt('첫번째 문자열을 입력해주세요.');
const inputTwo = prompt('두번째 문자열을 입력해주세요.');
const arrayOne = sol(inputOne);
const arrayTwo = sol(inputTwo);

//공통 부분 문자열 찾기- 교집합
let intersection = arrayOne.filter(x => arrayTwo.includes(x));

//문자열 길이로 내림차순 정렬
intersection.sort((a,b)=>{
    return b.length-a.length;
});

console.log(intersection[0].length);

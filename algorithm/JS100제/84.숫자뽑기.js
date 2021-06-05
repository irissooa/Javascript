/**소정이는 어떤 숫자에서 k개의 수를 뽑았을 때 가장 큰 수를 찾는 놀이를 하고 있습니다. 
예를 들어, 숫자 1723에서 두 개의 수를 뽑으면 [17, 12, 13, 72, 73, 23]을 만들 수 있습니다.
이 중 가장 큰 수는 73입니다.

위 예시처럼 어떤 수 n에서 k개의 수를 선택하여 만들 수 있는 수 중에서 가장 큰 수를 찾아 주세요.
 */
function solution(chars) {
  let permute = [];

  const f = (prefix, chars) => {
    for (let i=0; i<chars.length; i++) {
      permute.push(prefix + chars[i]);

      if (permute.indexOf(chars[i] + prefix) === -1) {
        permute.push(chars[i] + prefix);
      }

      f(prefix + chars[i], chars.slice(i + 1));
    }
  }

  f('', chars);

  let result = permute.filter(x => x.length === len);
  result.sort((a, b) => {return b-a});

  return result[0];
}

const num = prompt('숫자를 입력하세요').split('');
const len = parseInt(prompt('몇 개의 수를 선택하시겠습니까?'),10);
console.log(solution(num));

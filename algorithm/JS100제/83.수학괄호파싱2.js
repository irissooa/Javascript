/**
 * 수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다.
괄호는 소괄호와 중괄호가 있습니다.

**입출력 예시**

데이터 입력(1), 프로그램 종료(2) : 1
데이터를 입력하세요: 5 + 7 * {(3 * 5)}
True

데이터 입력(1), 프로그램 종료(2) : 1
데이터를 입력하세요: 5 + 7){ * (3 * 5)
False

데이터 입력(1), 프로그램 종료(2) : 2

 */
function math(e){
    const m = {
        ')':'(',
        '}':'{',
    };
    let stack = [];
    
    for (let i=0; i<e.length; i++){
        if (e[i].includes('(') || e[i].includes('{')){
            stack.push(e[i]);
        } else if (m[e[i]]){
            if (stack.length === 0){
                return false;
            } else{
                let t = m[e[i]];
                if (t != stack.pop()){
                    return false;
                }
            }   
        }
    }
    return stack.length === 0;
}

while (1){
    const order = prompt('데이터 입력(1), 프로그램 종료(2)');
    if (order === '1'){
        const ex = prompt('데이터를 입력하세요').split('');
        console.log(math(ex));
    } else{
        break;
    }
}
/**\
 * 
 * (연계형 문제 - 88번을 먼저 풀고 오셔야 합니다!)
제코베의 도움을 받아 성공적으로 지도를 만들어낸 지식이는 캐릭터의 움직임을 구현했습니다. 
하지만 지도 위의 캐릭터 위치를 나타내는데 문제가 발생했습니다.
지식이는 지도 위에서 캐릭터의 위치를 나타내기 위해 다시 한번 제코베에 도움을 요청합니다.

지도 위에서 캐릭터의 위치를 나타내주세요

1. 지도는 88번 문제의 해답을 사용해 주세요
2. 입력값은 지도, 캐릭터의 움직임입니다.
3. 캐릭터의 움직임은 { 상:1, 하:2, 좌:3, 우:4 }로 정수로 이루어진 배열이 들어갑니다.
4. 벽과 장애물은 통과할 수 없습니다. 
5. 마지막 캐릭터의 위치를 반영한 지도를 보여주고 위치를 반환하는 함수를 작성해 주세요.
 * **데이터**
가로 = 4
세로 = 5
캐릭터위치 = [0, 0]
장애물 = [[0,1],[1,1],[2,3],[1,3]]
console.log('캐릭터 이동 전 지도')
지도 = make_map(가로, 세로, 캐릭터위치, 장애물)

움직임 = [2,2,2,4,4,4]
console.log('캐릭터 이동 후 지도')
캐릭터 위치 = move(지도, 움직임)

**출력**
캐릭터 이동 전 지도
[2, 2, 2, 2, 2, 2]
[2, 1, 2, 0, 0, 2]
[2, 0, 2, 0, 2, 2]
[2, 0, 0, 0, 2, 2]
[2, 0, 0, 0, 0, 2]
[2, 0, 0, 0, 0, 2]
[2, 2, 2, 2, 2, 2]

캐릭터 이동 후 지도
[2, 2, 2, 2, 2, 2]
[2, 0, 2, 0, 0, 2]
[2, 0, 2, 0, 2, 2]
[2, 0, 0, 0, 2, 2]
[2, 0, 0, 0, 1, 2]
[2, 0, 0, 0, 0, 2]
[2, 2, 2, 2, 2, 2]
캐릭터위치 : [4, 4]
 */

function make_map(n,m,char,obj){
  //지도 초기화하기
  //각 지도 가로/세로 두칸 외벽을 포함한 크기만큼 추가하기(각 끝 한칸씩)
  let world_map = [];
  for(let i=0; i<m+2; i++){
    world_map.push(Array(n+2).fill(0));
  }

  //지도 외벽 그리기
  for(let i in world_map){
    for(let j in world_map[0]){
      if (i==0 || j==world_map[0].length-1 || j==0 || i==world_map.length-1) {
        world_map[i][j] = 2;
      }
    }
  }

  //지도에 캐릭터 추가하기/ 외벽으로 인해 좌표에 +1을 해줍니다.
  world_map[char[0]+1][char[1]+1] = 1;
  //지도에 장애물 추가하기
  for (let i of obj){
    if (world_map[i[0]+1][i[1]+1] != 1){
      world_map[i[0]+1][i[1]+1] = 2;
    } else {
      world_map[i[0]+1][i[1]+1] = 1;
    }
  }
  //장애물을 추가하려는 자리에 캐릭터가 있을 시 캐릭터는 그대로둔다
  //마찬가지 외벽으로 인한 좌표 조정을 해준다.
  for(let i of world_map) {
    console.log(i);
  }
  return world_map;
}

function move(world_map, moving){
  let x = 0;
  let y = 0;

  for(let i of world_map){
    if(i.includes(1)){
      x = world_map.indexOf(i);
      y = i.indexOf(1);
    }
  }

  world_map[y][x] = 0;

  for(let i of moving){
    if (i == 1 && world_map[y-1][x]!=2){
      y -= 1;
    } else if (i==2 && world_map[y+1][x]!=2){
      y += 1;
    } else if (i==3 && world_map[y][x-1]!=2){
      x -= 1;
    } else if (i==4 && world_map[y][x+1]!=2){
      x += 1;
    }
  }

  world_map[y][x] = 1;

  for (let i of world_map){
    console.log(i);
  }
  return [x,y];
}

console.log('캐릭터 이동 전 지도');
const world_map = make_map(4, 5, [0, 0], [[0,1],[1,1],[2,3],[1,3]]);

const moving = [2,2,2,4,4,4];
console.log('캐릭터 이동 후 지도');
console.log('캐릭터위치 :',move(world_map, moving));

'use strict';
import * as sound from './sound.js'

const CARROT_SIZE = 80;
export const ItemType = Object.freeze({
  carrot:'carrot',
  bug:'bug',
});

export class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.field = document.querySelector('.game__field');
    this.fieldRect = this.field.getBoundingClientRect();
    // JS에서는 onClick이 포함된 클래스 정보가 같이 콜백으로 전달되지 않는다.(추가설명 아래 onClick메소드에적음)
    // this바인딩방법1.
    // this.onClick = this.onClick.bind(this);
    // 바인딩방법2. arrow function을 씀(arrow function은 this가 유지됨)
    // this.field.addEventListener('click',(event) => this.onClick(event));
    // 바인딩방법3. onClick을 멤버변수로 만들고 이 멤버변수는 arrow function으로 가리키고 있음
    this.field.addEventListener('click',this.onClick);

  }
  init() {
    this.field.innerHTML = '';
    // 벌레와 당근을 생성한뒤 field에 추가해줌
    this._addItem('carrot',this.carrotCount,'img/carrot.png');
    this._addItem('bug',this.bugCount,'img/bug.png');
  }
  
  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }

  // js에서는 아직 private한 함수를 만들 수 없기 때문에 _를 앞에 붙여서 프라이빗한 것이라고 알수있게 표시함
  _addItem(className,count,imgPath) {
  const x1 = 0;
  const y1 = 0;
  // 필드의 끝값에서 당근 사이즈만큼 빼줘야 필드안에 들어감
  const x2 = this.fieldRect.width-CARROT_SIZE;
  const y2 = this.fieldRect.height-CARROT_SIZE;
  for (let i = 0; i < count; i++) {
    const item = document.createElement('img');
    item.setAttribute('class',className);
    item.setAttribute('src',imgPath);
    item.style.position = 'absolute';
    // randomNumber는 밖에 class밖에 있기 때문에 this.를 붙이지 않아도 됨
    const x = randomNumber(x1,x2);
    const y = randomNumber (y1,y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    this.field.appendChild(item); 
  }
}

  // 실제로 이 onclick이 다른 곳에서콜백으로 전달됐을때는 this.라는 정보가 이제 존재하지 않기 때문에 아이템 클릭이 계속 undefinded상태가됨
  // 그래서 JS에서는 누군가에게 전달해줄때 class정보가 무시되기 떄문에 클래스 정보를 무시하고 싶지 않을때는 바인딩을 해줘야된다!('this바인딩'이라고 함)
  // this 바인딩 방법 3가지가 있음
// 바인딩방법3. onClick을 멤버변수로 만들고 이 멤버변수는 arrow function으로 가리키고 있음
  onClick = event => {
    const target = event.target;
  // matches란 함수는 css셀렉터가 해당하는지 확인함
  // carrot클래스를 가진 타겟이면
  if (target.matches('.carrot')) {
    // 당근!
    target.remove();
    sound.playCarrot();
    this.onItemClick && this.onItemClick(ItemType.carrot);
  } else if(target.matches('.bug')) {
    // 벌레!
    this.onItemClick && this.onItemClick(ItemType.bug);
  } 
  }
}

// 클래스에 포함되지 않는 함수는 class밖에 두는것이 계속 불러오지 않고 효율적이다

// 랜덤숫자를 만들어주는 함수
function randomNumber(min,max) {
  return Math.random() * (max-min) + min;
}


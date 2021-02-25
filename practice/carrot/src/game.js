import { Field, ItemType} from './field.js';
import * as sound from './sound.js'

export const Reason = Object.freeze({
  win:'win',
  lose:'lose',
  cancel:'cancel',
});

// Builder Pattern
export class GameBuilder {
  withGameDuration(duration) {
    this.gameDuration = duration;
    // class 자체를 return한단 말
    return this;
  }
  withCarrotCount(num) {
    this.carrotCount = num;
    return this;
  }
  withBugCount(num) {
    this.bugCount = num;
    return this;
  }
  build() {
    console.log(this);
    // Game이란 클래스를 만들어서 리턴
    return new Game(
      this.gameDuration,
      this.carrotCount,
      this.bugCount
    );
  }
}

// Game class는 외부에 노출시키지 않을거다
class Game {
  constructor(gameDuration, carrotCount, bugCount) {
    this.gameDuration = gameDuration;
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.gameTimer = document.querySelector('.game__timer');
    this.gameScore = document.querySelector('.game__score');
    
    this.gameBtn = document.querySelector('.game__button');
    this.gameBtn.addEventListener('click',()=>{
      if (this.started) {
        this.stop(Reason.cancel);
      } else {
        this.start();
      }
    });

    this.gameField = new Field(carrotCount,bugCount);
    this.gameField.setClickListener(this.onItemClick);
    
    this.started = false;
    this.score = 0;
    this.timer = undefined;

  }
  
  setGameStopListener(onGameStop) {
    this.onGameStop = onGameStop;
  }

  start() {
  this.started = true;
  this.initGame();
  this.showStopButton();
  this.showTimerAndScore();
  this.startGameTimer();
  sound.playBackground();
}
stop(reason) {
  this.started = false;
  this.stopGameTimer();
  this.hideGameButton();
  sound.stopBackground();
  this.onGameStop && this.onGameStop(reason);
}

  
onItemClick = (item) => {
  if (!this.started) {
    return;
  }
  if (item === ItemType.carrot) {
    this.score++;
    this.updateScoreBoard();
    if (this.score === this.carrotCount) {
      this.stop(Reason.win);
    }
  } else if(item === ItemType.bug) {
    // 벌레!
    this.stop(Reason.lose);
  } 
}





showStopButton() {
  const icon = this.gameBtn.querySelector('.fas');
  icon.classList.add('fa-stop');
  icon.classList.remove('fa-play');
  this.gameBtn.style.visibility = 'visible';
};

hideGameButton() {
  this.gameBtn.style.visibility = 'hidden';
};

showTimerAndScore() {
  this.gameTimer.style.visibility = 'visible';
  this.gameScore.style.visibility = 'visible';
};

startGameTimer() {
  // setInterval api이용
  // timer를 함수 밖에서도 사용해야되니까 global변수로 사용
  let remainingTimeSec = this.gameDuration;
  this.updateTimerText(remainingTimeSec);
  this.timer = setInterval(()=>{
    if (remainingTimeSec <= 0) {
      clearInterval(this.timer);
      this.stop(this.carrotCount === this.score ? Reason.win : Reason.lose);
      return
    }
    //remainingTimeSec 1초씩 줄어들어야됨
    this.updateTimerText(--remainingTimeSec)
  },1000);
};

stopGameTimer() {
  clearInterval(this.timer);
}

updateTimerText(time) {
  const minutes = Math.floor(time/60);
  const seconds = time % 60;
  this.gameTimer.innerText = `${minutes}:${seconds}`
}

updateScoreBoard() {
  this.gameScore.innerText = this.carrotCount - this.score;
}

initGame() {
  this.score = 0;
  this.gameScore.innerText = this.carrotCount;
  this.gameField.init();
}

};
'use strict';
import PopUp from './popup.js';
import * as sound from './sound.js'
import { GameBuilder, Reason } from './game.js';


const gameFinishBanner = new PopUp();

// 생성자의 인자가 뭔지 알수없는 코드는 좋지않다
// const game = new Game(3,2,2);
// 이러면 우리가 어떤 값을 설정하는지 한눈에 볼 수 있다
const game = new GameBuilder()
.withGameDuration(60)
.withCarrotCount(15)
.withBugCount(10)
.build();

game.setGameStopListener((reason) => {
  let message;
  switch(reason) {
    case Reason.cancel:
      message = 'Replay?';
      sound.playAlert();
      break;
    case Reason.win:
      message = 'YOU WON!';
      sound.playWin();
      break;
    case Reason.lose:
      message = 'YOU LOST!';
      sound.playBug();
      break;
      default:
        throw new Error('not valid reason!');
  }
  gameFinishBanner.showWithText(message);
});
gameFinishBanner.setClickListener(()=>{
  game.start();
});
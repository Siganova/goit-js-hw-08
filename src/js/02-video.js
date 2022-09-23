import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_LINE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle((data) =>{
    localStorage.setItem(TIME_LINE_KEY, data.seconds);
},1000));

player.setCurrentTime(localStorage.getItem(TIME_LINE_KEY));
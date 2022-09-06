const playIcon = document.getElementById('player');
const musicAudio = document.getElementById('music-audio');
const musicTitle = document.querySelector(".music h2");
const artistName = document.querySelector(".music p");
const addVolume = document.querySelector('.plus');
const minVolume = document.querySelector('.minus');
const range = document.querySelector('.range');
const level = document.getElementById('volume-level');
const heart = document.querySelector('.heart');
const speaker = document.querySelector('.speaker');
const shuffle = document.getElementById('suffle');
const endTime = document.querySelector("#end");
const start = document.querySelector("#start");
const back = document.querySelector(".back");
const next = document.querySelector(".next");
const progress = document.querySelector("#timer");
const musicDuration = '';

const musicArray = new Array(
    "./Selena Gomez - Rare (Pop Up Video)(MP3_70K).mp3",
    "./Selena Gomez - The Heart Wants What It Wants (Official Video)(MP3_70K).mp3",
    "./ZAYN - Dusk Till Dawn ft. Sia (Official Music Video)(MP3_70K).mp3",
    "./Musalmana-Dawood Sarkhosh مسلمانا-داوود سرخوش(MP3_70K).mp3",
    "./Pashto_New_Japani_(Benjo)(_پشتو_نوی_سندری_فارسی_وایی_هلک_(جاپانی(128k).mp3",
    "./Sani_Obaildullah_new_pashto_song_2018_full_HD__1080P_ثانی_عبیدالله(128k).mp3"
);

function music() {
   
    if (musicAudio.paused) {
        playIcon.setAttribute('src', 'https://img.icons8.com/ios-glyphs/50/000000/pause--v1.png');
        setMusicDetails(musicArray[musicCounter].slice(16, 30), musicArray[musicCounter].slice(2, 16));
        setEndTime(musicAudio.duration);
        musicAudio.play();
       
       if (musicAudio.ended) {
            setEndTime(musicAudio.duration);
            playIcon.setAttribute('src', 'https://img.icons8.com/ios-filled/50/000000/play--v2.png');
            musicAudio.play();
            progress.style.width = '0px';
       }
   } else {
        playIcon.setAttribute('src', 'https://img.icons8.com/ios-filled/50/000000/play--v2.png');
        musicAudio.pause();
   }
}

addVolume.addEventListener('click', () => {
   range.value++;
   level.innerHTML = range.value;
   musicAudio.volume = range.value / 100;
});

minVolume.addEventListener('click', () => {
    range.value--;
    level.innerHTML = range.value;
    musicAudio.volume = range.value / 100;
});

function drags() {
     level.innerHTML = range.value;
     musicAudio.volume = range.value / 100;
}

function setInititalVolumeLevel() {
    level.innerHTML = range.value;
    musicAudio.volume = range.value / 100;
}
setInititalVolumeLevel();

const setMusicDetails = (title, author) => {
    musicTitle.innerHTML = title;
    artistName.innerHTML = author;
}


// heart

heart.addEventListener('click', () => {
    heart.classList.toggle('heart');
});

// speaker
let counter = 1;
speaker.addEventListener('click', () => {
    if (counter % 2 != 0) {
        speaker.setAttribute('src', 'https://img.icons8.com/ios-glyphs/24/000000/mute--v1.png');
        counter++;
        musicAudio.volume = 0;
    }
    else {
        speaker.setAttribute('src', 'https://img.icons8.com/material-rounded/24/000000/speaker.png');
        counter++;
        setInititalVolumeLevel();
    }
});

// repeat list, repeat current list, suffle
let saver = 0;
shuffle.addEventListener('click', () => {
   
    if (saver === 0) {
        saver++;
        shuffle.setAttribute('src', 'https://img.icons8.com/material-rounded/24/000000/repeat.png')
    }

    else if (saver === 1) {
        saver++;
        shuffle.setAttribute('src', 'https://img.icons8.com/fluency-systems-regular/24/000000/repeat-one.png');
    }

    else if (saver === 2) {
        saver++;
        shuffle.setAttribute('src', 'https://img.icons8.com/ios-filled/24/000000/right--v1.png')
    }
    else {
        shuffle.setAttribute('src', 'https://img.icons8.com/fluency-systems-filled/24/000000/cross-shuffle.png');
        saver = 0;
    }
});


// seeking the music
let duration = musicAudio.duration;
function returnMusicDuration (duration) {
    return String(Math.floor(Number(duration) / 60)) + ":" + String(Number(duration) % 60)[0] +
            String(Number(duration) % 60) [1];   
}

function setEndTime(duration) {
    endTime.innerHTML = returnMusicDuration(duration);
}

// editing the starting time and end time every 1 mic sec

let minutes = 0;
let seconds = 0;
let sixty = 60;
setInterval(() => {
    if (! musicAudio.paused && (! musicAudio.ended)) {
        start.innerHTML = String(minutes) + ":" + String(++seconds);
       if (seconds === 60) {
           seconds = 0;
           minutes++;
       }
    }
    else if (musicAudio.ended) {
        start.innerHTML = '00:00';
    }
}, 1000);

// the next and back values of it
let musicCounter = 0;

next.addEventListener('click', (defaults) =>  {
    defaults.preventDefault();
    if (musicCounter === musicArray.length - 1) {
        musicCounter = 0;
        setEndTime(musicAudio.duration);
        musicAudio.setAttribute('src', musicArray[musicCounter]);
        musicAudio.play();
        setMusicDetails(musicArray[musicCounter].slice(16, 30), musicArray[musicCounter].slice(2, 16));
    }
    else {
        musicAudio.setAttribute('src', musicArray[++musicCounter]);
        setEndTime(musicAudio.duration);
        musicAudio.play();
        setMusicDetails(musicArray[musicCounter].slice(16, 30), musicArray[musicCounter].slice(2, 16));
    }
});

back.addEventListener('click', (preventDef) => {
    
    preventDef.preventDefault();
    
    if (musicCounter === musicArray.length - 1) {
        musicCounter = 0;
        musicAudio.setAttribute('src', musicArray[musicCounter]);
        musicAudio.play();
        setMusicDetails(musicArray[musicCounter].slice(16, 30), musicArray[musicCounter].slice(2, 16));
    }

    else if (musicCounter < 0)
        alert('End Of Music');

    else {
        musicAudio.setAttribute('src', musicArray[--musicCounter]);
        setMusicDetails(musicArray[musicCounter].slice(16, 30), musicArray[musicCounter].slice(2, 16));
        musicAudio.play();
    }    
});

function returnPercentage() {
    
    console.log(Math.ceil(musicAudio.currentTime % 60));
    return Math.ceil(musicAudio.currentTime % 60);
}

let anitSixtyCounter = 0;
setInterval(
    () => {
        if (! musicAudio.paused) {
            progress.style.width = ++anitSixtyCounter + 'px';
        }
        else if (musicAudio.ended) {
            progress.style.width = '0px';
            alert('ended');

            // play the next music in the queue
            musicAudio.setAttribute('src', musicArray[++musicCounter]);
            musicAudio.play();
        }
    }, 1000
);

// Not GOOD NOT GOOD
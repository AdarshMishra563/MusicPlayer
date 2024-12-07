let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");


let isPlaying = false;
let updateTimer;
a=localStorage.getItem("a");

let curr_v=document.getElementById('video');

let curr_track = document.createElement('audio');
curr_v.volume="0";
let track_list = [
  {
    name: "Ringtone1",
    artist: "Iphone music",
    image: "https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://dl.prokerala.com/downloads/ringtones/files/mp3/arash-broken-angel-ringtone-sad-ringtone-720p-00-61932-63588.mp3",
     PathV:"https://videocdn.cdnpk.net/videos/e76f83bf-1f2e-4d86-87cd-823ec1ad8dcf/horizontal/previews/videvo_watermarked/large.mp4"
  },
  {
    name: "Ringtone2",
    artist: "iMusic",
    image: "https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://dl.prokerala.com/downloads/ringtones/files/mp3/iphone-13-30-00-62001.mp3"
  },
  {
    name: "fein",
    artist: "travis",
    image: "https://a10.gaanacdn.com/gn_img/albums/NOXWVRgWkq/XWVVAVp9Wk/size_m.jpg",
    path: "https://hhk.awamedia.store/uploads/new/music/2024/09/Travis-Scott-FE-N-(HipHopKit.com).mp3",
    PathV:"C:/Desktop/Projects/music player/the-weeknd-playboi-carti-timeless-2160-publer.io.mp4",
  

  },
  {name:"Timeless",
    artist:"The Weeknd",
    image:"https://i0.wp.com/www2.hiphopkit.com/uploads/2024/09/The-Weeknd-Timeless-artwork.jpg?ulb=false&ssl=1&resize=320,350",
    path:"https://hhk.awamedia.store/uploads/music/2024/09/The-Weeknd-Timeless-ft-Playboi-Carti-(HipHopKit.com).mp3",
   PathV:"https://video-ssl.itunes.apple.com/itunes-assets/Video221/v4/b9/f9/aa/b9f9aa22-72bc-1a8c-6410-d1bc42521890/mzvf_1544412418733521443.720w.h264lc.U.p.m4v"
  },
  {name:"FatherSMH",
    artist:"Kanye",
    image:"https://i1.sndcdn.com/artworks-QxEXFVtxPs8KLGRH-f7sDDA-t500x500.png",
    path:"https://p.scdn.co/mp3-preview/92e9e2777d5300825d0f14e8afab4c693c4546bb",
   
  },
  {name:"Highest in the Room",
    artist:"Travis",
    image:"https://w0.peakpx.com/wallpaper/156/654/HD-wallpaper-travis-scott-astroworld-highest-in-the-room-hurtspace-hurtspace1-rappers-travis-scott-thumbnail.jpg",
    path:"https:\u002F\u002Fus-tuna-sounds-files.voicemod.net\u002F0acfa925-feb6-4a88-bdc7-2c42aa1eb8c2-1660154830962.mp3",
   PathV:"https://videos.pexels.com/video-files/3296054/3296054-uhd_2732_1440_25fps.mp4",
  }
];
k=track_list.findIndex(function(p){return p.name==a});
let track_index = k;
function random_bg_color() {

  
  let red = Math.floor(Math.random() * 256) + 30;
  let green = Math.floor(Math.random() * 256) + 60;
  let blue = Math.floor(Math.random() * 256) + 40;

  
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";
playerD=document.getElementById("player")
  playerD.style.background = bgColor;
 
  
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_v.src=track_list[track_index].PathV;
curr_track.addEventListener("playing", curr_v.load())

  curr_track.load();
curr_v.load()
  body.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  track_art.replaceWith(curr_v);
;
  
  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  curr_v.addEventListener("ended",ff)
  random_bg_color();
  function ff(){
  curr_v.play();
  }
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}


loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  curr_v.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  curr_v.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
  let seektow = curr_v.duration * (seek_slider.value / 100);
  curr_v.currentTime = seektow;
  }

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

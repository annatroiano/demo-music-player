const audio = document.querySelector("audio");
const title = document.querySelector(".title");
const artist = document.querySelector(".artist");
const currentTimeNum = document.querySelector(".current-time");
const durationNum = document.querySelector(".duration");
const progressBarContainer = document.querySelector(".progress-bar-container");
const progressBar = document.querySelector(".progress-bar");
const playerButtons = document.querySelector(".player-buttons");
const previous = document.querySelector(".previous");
const playPauseBtn = document.querySelector(".play-pause-button");
const playIcon = document.querySelector(".play-icon");
const pauseIcon = document.querySelector(".pause-icon");
const next = document.querySelector(".next");

playerButtons.insertAdjacentHTML("afterend", `<div class="volume-container"><div><p>Volume</p><p class="volume-number"></p></div><div class="volume-buttons"><button class="volume-button volume-up"><span class="material-icons"> add_circle </span></button><button class="volume-button volume-down"><span class="material-icons"> remove_circle </span></button></div></div>`);
const volumeNumber = document.querySelector(".volume-number");
const volumeUp = document.querySelector(".volume-up");
const volumeDown = document.querySelector(".volume-down");
let volumeValue = 0;
audio.volume = 0;
volumeNumber.textContent = "0";

const playlist = [
  { title: "funk-it", artist: "ComaStudio" },
  { title: "fashion-guitar-beat", artist: "Coma-Media" },
  { title: "the-train", artist: "Caffeine Creek Band" },
];

let track = 0;

function displayName(info) {
  let name;
  if (info === title) {
    name = playlist[track]["title"].replaceAll("-", " ");
    info.style.textTransform = "capitalize";
  } else if (info === artist) {
    name = playlist[track]["artist"];
  }
  info.textContent = name;
}

function setMinutesSeconds(num) {
  let minutes = Math.trunc(num / 60);
  let seconds = Math.trunc(num % 60);
  if (seconds < 10) {
    return `${minutes}:0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

function getProgress() {
  progressBar.style.width = `${(100 / audio.duration) * audio.currentTime}%`;
  currentTimeNum.textContent = setMinutesSeconds(audio.currentTime);
  durationNum.textContent = setMinutesSeconds(audio.duration);
  if (audio.currentTime === audio.duration) {
    skipNext();
  }
}

function setProgress(e) {
  let clickX = e.offsetX;
  audio.currentTime =
    (clickX / progressBarContainer.clientWidth) * audio.duration;
}

function activatePlay() {
  audio.play();
  playIcon.classList.remove("active");
  pauseIcon.classList.add("active");
  displayName(title);
  displayName(artist);
  audio.addEventListener("timeupdate", getProgress);
}

function activatePause() {
  audio.pause();
  playIcon.classList.add("active");
  pauseIcon.classList.remove("active");
  displayName(title);
  displayName(artist);
}

function playPauseSong() {
  if (playIcon.classList.contains("active")) {
    activatePlay();
  } else if (pauseIcon.classList.contains("active")) {
    activatePause();
  }
}

function keepPlayPauseIcon() {
  if (playIcon.classList.contains("active")) {
    activatePause();
  } else if (pauseIcon.classList.contains("active")) {
    activatePlay();
  }
}

function skipPrevious() {
  if (audio.currentTime > 1) {
    return (audio.currentTime = 0);
  }
  if (track === 0) {
    track = playlist.length;
  }
  audio.src = `tracks/${playlist[--track]["title"]}.mp3`;
  keepPlayPauseIcon();
}

function skipNext() {
  if (track === playlist.length - 1) {
    track = -1;
  }
  audio.src = `tracks/${playlist[++track]["title"]}.mp3`;
  keepPlayPauseIcon();
}

function increaseVolume() {
  if (audio.volume <= 0.9) {
    audio.volume += 0.1;
    volumeNumber.textContent = `${++volumeValue}`;
  }
}

function decreaseVolume() {
  if (audio.volume >= 0.1) {
    audio.volume -= 0.1;
    volumeNumber.textContent = `${--volumeValue}`;
  }
}

displayName(title);
displayName(artist);
playPauseBtn.addEventListener("click", playPauseSong);
previous.addEventListener("click", skipPrevious);
next.addEventListener("click", skipNext);
progressBarContainer.addEventListener("click", setProgress);
volumeUp.addEventListener("click", increaseVolume);
volumeDown.addEventListener("click", decreaseVolume);

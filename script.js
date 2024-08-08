console.log("Welcome to spotify");
let songIndexx = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar'); 
let gif = document.getElementById('gif');
let songs = [
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/10.mp3", coverPath: "covers/10.jpg"},
]

//handle lay/ause clic 
masterPlay.addEventListener('click',()=> {
  if(audioElement.aused || audioElement.currentTime<=0) {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  }
  else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;
  }
})
//lsten to events 
audioElement.addEventListener('timeupdate', ()=>{
  progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=> {
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
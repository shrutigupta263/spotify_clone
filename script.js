console.log("Welcome to spotify");
let songIndexx = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar'); 
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItemms = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "TU HAI TOH", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "CHOR", filePath: "song/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "NEW THANG", filePath: "song/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "PERFECT", filePath: "song/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "MOVEMMENT", filePath: "song/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "BABY", filePath: "song/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "LET ME LOVE YOU", filePath: "song/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "NIGHT CHANGES", filePath: "song/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "AS IT WAS YOU", filePath: "song/10.mp3", coverPath: "covers/10.jpg"},
]
songItems.forEach((element, i)=>{ 
  element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

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
const makeAllPlays = ()=> {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  })
}
Array.from (document.getElementsByClassName('songItemlay')).forEach((element)=> {
  element.addEventListener('click', (e)=> {
    makeAllPlays();
    songIIndex = arseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })
})
ocument.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=9){
      songIndex = 0
  }
  else{
      songIndex += 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
      songIndex = 0
  }
  else{
      songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})
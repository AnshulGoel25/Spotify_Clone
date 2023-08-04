console.log("Welcome to Spotify");

// Intialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs  = [
<<<<<<< HEAD
    {songName: " Shake It Off", filePath: "songs/1.mp3", coverPath: "covers/1.jpeg"},
    {songName: " Look What You Made Me Do", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg"},
    {songName: " Wildest Dreams", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg"},
    {songName: " Getaway Car 2017 ", filePath: "songs/4.mp3", coverPath: "covers/4.jpeg"},
    {songName: " Ready For It_  2017 ", filePath: "songs/5.mp3", coverPath: "covers/5.jpeg"},
    {songName: " Blank Space", filePath: "songs/6.mp3", coverPath: "covers/6.jpeg"},
    {songName: " Bad Blood", filePath: "songs/7.mp3", coverPath: "covers/7.jpeg"},
    {songName: " I Knew You Were Trouble.", filePath: "songs/8.mp3", coverPath: "covers/8.jpeg"},
    {songName: " Love Story", filePath: "songs/9.mp3", coverPath: "covers/9.jpeg"},
    {songName: " Out of the Woods", filePath: "songs/10.mp3", coverPath: "covers/10.jpeg"},
=======
    {songName: "Shake It Off", filePath: "songs/1.mp3", coverPath: "covers/1.jpeg"},
    {songName: "Look What You Made Me Do", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg"},
    {songName: "Wildest Dreams", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg"},
    {songName: "Getaway Car 2017 ", filePath: "songs/4.mp3", coverPath: "covers/4.jpeg"},
    {songName: "Ready For It_  2017 ", filePath: "songs/5.mp3", coverPath: "covers/5.jpeg"},
    {songName: "Blank Space", filePath: "songs/6.mp3", coverPath: "covers/6.jpeg"},
    {songName: "Bad Blood", filePath: "songs/7.mp3", coverPath: "covers/7.jpeg"},
    {songName: "I Knew You Were Trouble.", filePath: "songs/8.mp3", coverPath: "covers/8.jpeg"},
    {songName: "Love Story", filePath: "songs/9.mp3", coverPath: "covers/9.jpeg"},
    {songName: "Out of the Woods", filePath: "songs/10.mp3", coverPath: "covers/10.jpeg"},
>>>>>>> 470c5646c7f4ab59bd39189ed245c896cb2a0757
]

songItems.forEach((element,i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src  = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

// audioElement.play();


// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        document.getElementById(songIndex).classList.remove('fa-play-circle');
        document.getElementById(songIndex).classList.add('fa-pause-circle');

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        document.getElementById(songIndex).classList.remove('fa-pause-circle');
        document.getElementById(songIndex).classList.add('fa-play-circle');
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress  = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime  = myProgressBar.value*audioElement.duration/100;
})

 const makeAllPlays = ()=>{
     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
         element.classList.remove('fa-pause-circle');
         element.classList.add('fa-play-circle');

    })
}





Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{

        makeAllPlays();
        songIndex = parseInt(e.target.id);
      
          
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        if(audioElement.paused){
            audioElement.src = (`songs/${songIndex+1}.mp3`);
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.play();
            element.classList.remove('fa-play-circle');
            element.classList.add('fa-pause-circle');
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        }
        else{
            audioElement.pause();
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity=0;
        }
    })
})

document.getElementById('next').addEventListener('click', ()=>{
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


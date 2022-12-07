console.log("Welcome to Spotify");
var songIndex = 0
var audioElement = new Audio('../songs/1.mp3');
var masterPlay = document.getElementById('main-play-btn');
var myProgressBar = document.getElementById('progress-bar');
var gif = document.getElementById('gif');
var songbtn = Array.from(document.getElementsByClassName('fa-regular'));
var forwardBtn = document.getElementById('main-forward-btn');
var backwardBtn = document.getElementById('main-backward-btn');

// ------------------------------------------------------Functions--------------------------------------------------------------------


function playSong(){
     audioElement.play();
     masterPlay.classList.remove('fa-play');
     masterPlay.classList.add('fa-pause');
     gif.classList.remove('invisible-gif');
     gif.classList.add('visible-gif');

     audioElement.addEventListener('timeupdate', function(){
          var progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
          myProgressBar.value = progress;
     })
     
}

function pauseSong(){
     makeAllPlays();
     audioElement.pause();
     masterPlay.classList.remove('fa-pause');
     masterPlay.classList.add('fa-play');
     gif.classList.remove('visible-gif');
     gif.classList.add('invisible-gif');
}

function makeAllPlays(){
     songbtn.forEach(function(element){
          audioElement.pause()
          element.classList.remove('fa-circle-pause');
          element.classList.add('fa-circle-play');

     })
}
// ---------------------------------------------------------Events---------------------------------------------------------------------


masterPlay.addEventListener('click', function(){
     if(audioElement.paused || audioElement.currentTime<=0){
          playSong();
     }
     else{
          pauseSong();
     }
})

audioElement.addEventListener('timeupdate', function(){
     var progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
     myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', function(){
     audioElement.currentTime = parseInt((myProgressBar.value * audioElement.duration)/100);
})


songbtn.forEach(function(element){
     element.addEventListener('click',function(e){
          makeAllPlays();
          // console.log(e.target.id)
          songIndex = parseInt(e.target.id);
          audioElement = new Audio('../songs/'+e.target.id+'.mp3');
          playSong();
          e.target.classList.remove('fa-circle-play');
          e.target.classList.add('fa-circle-pause');
     })
})


forwardBtn.addEventListener('click',function(){
     
     makeAllPlays();
     if(songIndex<=6){
          songIndex+=1;
     }
     else{
          songIndex = 1;
     }
     audioElement = new Audio('../songs/'+songIndex+'.mp3');
     document.getElementById(songIndex).classList.remove('fa-circle-play');
     document.getElementById(songIndex).classList.add('fa-circle-pause');
     playSong();
})

backwardBtn.addEventListener('click',function(){
     makeAllPlays();
     if(songIndex>=2){
          songIndex-=1;
          console.log(songbtn.length)
     }
     else{
          songIndex = songbtn.length;
          
     }
     audioElement = new Audio('../songs/'+songIndex+'.mp3');
     document.getElementById(songIndex).classList.remove('fa-circle-play');
     document.getElementById(songIndex).classList.add('fa-circle-pause');
     playSong();
})
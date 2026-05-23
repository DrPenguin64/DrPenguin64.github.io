let audio = new Audio();
let curTrack = null;
let isPlaying = false;
const LISTEN_BUTTON = document.getElementById("listenButton");

function listenButtonClick()
{
    if (isPlaying)
    {
        audio.pause();
        audio = new Audio();
        isPlaying = false;
        document.getElementById("listenInfo").innerText = "nothing";
        document.getElementById("listenInfo").style.color = "black";
    }
    else
    {
        playRandom();
        isPlaying = true;
    }
}

async function playRandom()
{
  fetch("tracks.json")
  .then(r => r.json())
  .then(tracks => {
    const file = tracks[Math.floor(Math.random() * tracks.length)];
    const audio = new Audio(file);
    audio.loop = true;
    audio.play();
  });
    
}

LISTEN_BUTTON.addEventListener("click", listenButtonClick);
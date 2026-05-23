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
    const response = await fetch("/api/tracks");
    const tracks = await response.json();

    if (tracks.length === 0)
    {
        console.log("No audio files found");
        return;
    }
    const _index = Math.floor(Math.random() * tracks.length);
    const musicfile = tracks[_index];

    document.getElementById("listenInfo").innerText = `${musicfile}`.replace(".mp3", "");
    document.getElementById("listenInfo").style.color = "blue";
    audio = new Audio(`audio/${musicfile}`);
    audio.loop = true;
    audio.play();
    
}

LISTEN_BUTTON.addEventListener("click", listenButtonClick);
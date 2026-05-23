let audio = new Audio();
let isPlaying = false;

const LISTEN_BUTTON = document.getElementById("listenButton");

function listenButtonClick() {
    if (isPlaying) {
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;

        document.getElementById("listenInfo").innerText = "nothing";
        document.getElementById("listenInfo").style.color = "black";
    } else {
        playRandom();
    }
}

async function playRandom() {
    const res = await fetch("tracks.json");
    const tracks = await res.json();

    const file = tracks[Math.floor(Math.random() * tracks.length)];

    audio.pause(); // stop previous if any
    audio = new Audio(file);

    audio.loop = true;

    await audio.play();

    isPlaying = true;

    document.getElementById("listenInfo").innerText = file;
    document.getElementById("listenInfo").style.color = "green";
}

LISTEN_BUTTON.addEventListener("click", listenButtonClick);
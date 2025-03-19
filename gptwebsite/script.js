const songs = [
    { title: "Song 1", src: "assets/song1.mp3", cover: "assets/cover1.jpg" },
    { title: "Song 2", src: "assets/song2.mp3", cover: "assets/cover2.jpg" },
    { title: "Song 3", src: "assets/song3.mp3", cover: "assets/cover3.jpg" }
];

let currentSongIndex = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function loadSong(index) {
    title.textContent = songs[index].title;
    audio.src = songs[index].src;
    cover.src = songs[index].cover;
}

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸";
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }
});

nextBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playBtn.textContent = "⏸";
});

prevBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playBtn.textContent = "⏸";
});

// Load the first song
loadSong(currentSongIndex);

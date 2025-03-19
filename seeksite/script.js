document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const volumeControl = document.getElementById('volumeControl');

    playPauseBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    stopBtn.addEventListener('click', function() {
        audio.pause();
        audio.currentTime = 0;
        playPauseBtn.textContent = 'Play';
    });

    volumeControl.addEventListener('input', function() {
        audio.volume = volumeControl.value;
    });
});
const soundboardContainers = document.querySelectorAll('.soundboard-container');
const body = document.body;
const darkModeToggle = document.getElementById('dark-mode-toggle');
let currentlyPlayingAudio = null;

// Dark Mode Toggle Functionality
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    if (savedTheme === "light-mode-forced") {
        // darkModeToggle.textContent = "Light Mode";
    }
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode-forced');
        localStorage.setItem('theme', "light-mode-forced");
        // darkModeToggle.textContent = "Light Mode";
    } else if (body.classList.contains('light-mode-forced')) {
        body.classList.remove('light-mode-forced');
        localStorage.removeItem('theme');
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark-mode');
        }
        // darkModeToggle.textContent = "Toggle Dark Mode";
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        // darkModeToggle.textContent = "Toggle Dark Mode";
    }
});

// Soundboard Functionality
soundboardContainers.forEach(container => {
    const soundboardButtons = container.querySelectorAll('button');

    soundboardButtons.forEach(button => {
        const soundId = button.dataset.sound;
        const audioElement = document.getElementById(soundId);

        if (audioElement) {
            audioElement.addEventListener('canplaythrough', () => {
                // Audio is ready to play
            });

            audioElement.addEventListener('error', () => {
                console.error(`Error loading audio: ${soundId}`);
                button.disabled = true;
                button.textContent = "Error loading sound";
            });
        }

        button.addEventListener('click', () => {
            if (currentlyPlayingAudio && !currentlyPlayingAudio.paused) {
                const playingButton = document.querySelector(`button[data-sound="${currentlyPlayingAudio.id}"]`);
                if (playingButton) {
                    playingButton.classList.remove("playing");
                }
                currentlyPlayingAudio.pause();
                currentlyPlayingAudio.currentTime = 0;
            }

            if (audioElement) {
                audioElement.currentTime = 0;
                audioElement.play();
                currentlyPlayingAudio = audioElement;
                button.classList.add("playing");

                audioElement.addEventListener("ended", () => {
                    button.classList.remove("playing");
                });
            }
        });

        button.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                button.click();
            }
        });
    });
});

const buttons = document.querySelectorAll('button');
const body = document.body;
const darkModeToggle = document.createElement('button'); // Create the button
darkModeToggle.textContent = "Toggle Dark Mode";
darkModeToggle.id = "dark-mode-toggle";
body.appendChild(darkModeToggle); // Add to the page

// Check for saved preference or system preference on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    if(savedTheme === "light-mode-forced"){
        darkModeToggle.textContent = "Light Mode";
    }
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode-forced');
        localStorage.setItem('theme', "light-mode-forced");
        darkModeToggle.textContent = "Light Mode";
    } else if(body.classList.contains('light-mode-forced')){
        body.classList.remove('light-mode-forced');
        localStorage.removeItem('theme');
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark-mode');
        }
        darkModeToggle.textContent = "Toggle Dark Mode";
    }
    else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        darkModeToggle.textContent = "Toggle Dark Mode";
    }
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundId = button.dataset.sound;
        const audio = document.getElementById(soundId);

        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    });
});

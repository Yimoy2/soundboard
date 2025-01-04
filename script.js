document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".sound-button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const soundName = button.dataset.sound;
            const audio = new Audio(`sounds/${soundName}.mp3`);
            audio.play();
        });
    });
});

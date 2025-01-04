const buttons = document.querySelectorAll('.sound-btn');
const audio = document.getElementById('audio');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const sound = button.getAttribute('data-sound');
    audio.src = `sounds/${sound}.mp3`; // Make sure your sound files are in a "sounds" folder
    audio.play();
  });
});

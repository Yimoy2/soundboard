let currentSound = null;
let canPlaySounds = false;

const buttons = document.querySelectorAll('button');

function enableSounds() {
  canPlaySounds = true;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (canPlaySounds) {
      const soundName = button.id.replace('sound', '');
      playSound(soundName);
    }
  });
});

function playSound(soundName) {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
  }

  const audio = new Audio('sounds/' + soundName + '.mp3');
  audio.play();
  currentSound = audio;
}

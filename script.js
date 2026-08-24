const musicButton = document.querySelector('#musicButton');
const musicLabel = document.querySelector('#musicLabel');
const audioInput = document.querySelector('#audioInput');
const audioPlayer = document.querySelector('#audioPlayer');
const surpriseButton = document.querySelector('#surpriseButton');
const celebration = document.querySelector('#celebration');

musicButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play().then(() => {
      musicLabel.textContent = 'Pause music';
      musicButton.setAttribute('aria-label', 'Pause birthday music');
    });
  } else {
    audioPlayer.pause();
    musicLabel.textContent = 'Play music';
    musicButton.setAttribute('aria-label', 'Play birthday music');
  }
});

audioInput.addEventListener('change', () => {
  const [song] = audioInput.files;
  if (!song) return;

  audioPlayer.src = URL.createObjectURL(song);
  audioPlayer.play().then(() => {
    musicLabel.textContent = 'Pause music';
    musicButton.setAttribute('aria-label', 'Pause birthday music');
  });
});

surpriseButton.addEventListener('click', () => {
  celebration.classList.remove('wished');
  void celebration.offsetWidth;
  celebration.classList.add('wished');
  surpriseButton.querySelector('span').textContent = 'Wish sent!';
  setTimeout(() => { surpriseButton.querySelector('span').textContent = 'Make a wish'; }, 2200);
});

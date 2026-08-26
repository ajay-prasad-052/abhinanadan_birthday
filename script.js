const surpriseButton = document.querySelector('#surpriseButton');
const celebration = document.querySelector('#celebration');
const audioPlayer = document.querySelector('#audioPlayer');

const startMusic = () => {
  audioPlayer.play().then(() => {
    document.removeEventListener('pointerdown', startMusic);
    document.removeEventListener('touchstart', startMusic);
    document.removeEventListener('click', startMusic);
  }).catch(() => {});
};

document.addEventListener('pointerdown', startMusic);
document.addEventListener('touchstart', startMusic, { passive: true });
document.addEventListener('click', startMusic);

surpriseButton.addEventListener('click', () => {
  celebration.classList.remove('wished');
  void celebration.offsetWidth;
  celebration.classList.add('wished');
  surpriseButton.querySelector('span').textContent = 'Wish sent!';
  setTimeout(() => { surpriseButton.querySelector('span').textContent = 'Make a wish'; }, 2200);
});

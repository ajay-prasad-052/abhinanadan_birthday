const surpriseButton = document.querySelector('#surpriseButton');
const celebration = document.querySelector('#celebration');

surpriseButton.addEventListener('click', () => {
  celebration.classList.remove('wished');
  void celebration.offsetWidth;
  celebration.classList.add('wished');
  surpriseButton.querySelector('span').textContent = 'Wish sent!';
  setTimeout(() => { surpriseButton.querySelector('span').textContent = 'Make a wish'; }, 2200);
});

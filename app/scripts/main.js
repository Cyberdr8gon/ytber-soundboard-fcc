window.addEventListener('keydown', function(event) {
  let clip = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  let key = document.querySelector(`div[data-key="${event.keyCode}"]`)

  if (clip) {
    clip.currentTime = 0;
    clip.play();
    key.classList.add('playing');
  }

});

function removePlaying(event) {
  if(event.propertyName !== 'transform') {
    return;
  }
  this.classList.remove('playing');
}

let keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removePlaying));


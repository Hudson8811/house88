const originalSound = $('.original-sound');
const audio = originalSound.find('audio');
const toggle = originalSound.find('.original-sound__toggle');
const toggleModClass = 'original-sound__toggle--play';

toggle.on('click', function() {
  if (toggle.hasClass(toggleModClass)) {
    toggle.removeClass(toggleModClass);
    audio.trigger('pause');
  } else {
    toggle.addClass(toggleModClass);
    audio.trigger('play');
  }
})
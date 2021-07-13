const videos = $('.video-box');
const ModifierClass = {
  PLAY: 'video-box--play',
  SOUND: 'video-box--sound',
  SOUND_TOGGLE: 'sound-toggle--no-muted'
}

videos.on('click', function(evt) {
  const current = $(this);
  const currentIndex = videos.index(current);
  const video = current.find('video');
  //const soundToggle = current.find('.sound-toggle');
  const poster = $(evt.target).closest('.video-box__poster');

  /*soundToggle.on('click', function (e) {
    e.stopImmediatePropagation();
    if (soundToggle.hasClass(ModifierClass.SOUND_TOGGLE)) {
      video.prop('muted', true);
      soundToggle.removeClass(ModifierClass.SOUND_TOGGLE);
    } else {
      video.prop('muted', false);
      soundToggle.addClass(ModifierClass.SOUND_TOGGLE);
    }
  });*/

  if (poster) {
    videos.each(function(index) {
      if (currentIndex !== index) {
        $(this).removeClass(ModifierClass.PLAY).find('video').trigger('pause');
      }
    });

    if (current.hasClass(ModifierClass.PLAY)) {
      video.trigger('pause');
      current.removeClass(ModifierClass.PLAY);
    } else {
      video.trigger('play').on('ended', function() {
        current.removeClass(ModifierClass.PLAY);
    });
      current.addClass(ModifierClass.PLAY);
    }
  }
})


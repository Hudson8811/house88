$(window).on('load', function() {
  const videoWrapper = $('.__js_video');
  const videoWrapperModClass = 'playing';

  videoWrapper.on('click', function (evt) {
    const video = $(this).find('video');
    if ($(this).hasClass(videoWrapperModClass)) {
      $(this).removeClass(videoWrapperModClass);
      video.trigger('pause');
    } else {
      $(this).addClass(videoWrapperModClass);
      video.trigger('play');
      video.on('ended', () => {
        $(this).removeClass(videoWrapperModClass);
      });
    }
  });
})
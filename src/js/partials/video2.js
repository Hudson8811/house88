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



});



$(window).on('load', function() {
  const videoWrapper = $('.__js_video-2');
  const videoWrapperModClass = 'playing';
  const videoWrapperModClassStarted = 'started';
  const video = videoWrapper.find('video');

  let timeupdate = false;

  $('.what-doing__section-media-poster, .what-doing__section-media-icon').on('click', function (evt) {
    videoWrapper.addClass(videoWrapperModClass);
    videoWrapper.addClass(videoWrapperModClassStarted);
    video.trigger('play');
    video.prop('controls',true);
  });

  video.on('ended', () => {
    videoWrapper.removeClass(videoWrapperModClass);
    videoWrapper.removeClass(videoWrapperModClassStarted);
    video.prop('controls',false);
  });

  video.on('pause', () => {
    setTimeout(function (){
      if (timeupdate){
        timeupdate = false;
       } else {
        videoWrapper.removeClass(videoWrapperModClass);
        video.prop('controls',false);
      }
    },50)
  });
  video.on('seeking', () => {
    timeupdate = true;
  });
  video.on('seeked', () => {
    timeupdate = true;
  });

})
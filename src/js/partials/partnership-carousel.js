$(window).on('load', function() {
  let windowWidth = $(window).width();
  const partnersVideos = $('.partnership__video');
  let isInit = false;

  /*
  На мобильных устройства убрать автоплей. При инициализации слайдера только в активном запускать скриптом видео. При смене слайдов выключить в предыдущем (или пауза) и запускать в новом слайде.
  */

  let partnersVideoCarousel = null;

  if (windowWidth <= 768) {
    partnersVideos.find('video').prop('autoplay', false).trigger('pause');
    initPartnersCarousel();
    isInit = true;
  } 

	$(window).on('resize', function() {
		windowWidth = $(window).width();

    if (windowWidth <= 768 && !isInit) {
      partnersVideos.find('video').prop('autoplay', false).trigger('pause');
      initPartnersCarousel();
      isInit = true;
    } else if (windowWidth > 768 && isInit) {
      isInit = false;
      partnersVideoCarousel.destroy();
      partnersVideoCarousel = null;
      partnersVideos.find('video').prop('autoplay', true).trigger('play');
    }
	});

  function initPartnersCarousel() {
    partnersVideoCarousel = new Swiper('.partnership__grid', {
      loop: true,
      speed: 300,
      spaceBetween: 0,
      slidesPerView: 'auto',
      centeredSlides: true,
      on: {
        afterInit: function (swiper) {
          swiper.slides[swiper.activeIndex].querySelector('video').play();
        },
        slideChangeTransitionStart: function (swiper) {
          swiper.slides[swiper.previousIndex].querySelector('video').pause();
        },
        slideChangeTransitionEnd: function (swiper) {
          swiper.slides[swiper.activeIndex].querySelector('video').play();
        }
      }
    })
  }
})

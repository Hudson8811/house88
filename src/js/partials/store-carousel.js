$(window).on('load', () => {
  let windowWidth = $(window).width();
  let breakpoint = 768;
  let carousel = null;
  let isInit = false;
  
  if (windowWidth < breakpoint) {
    initCarousel();
    isInit = true;
  }

  $(window).on('resize', function() {
    if (windowWidth < breakpoint && !isInit) {
      initCarousel();
      isInit = true;
    } else if (windowWidth > brekpoint && isInit) {
      isInit = false;
      carousel.destroy();
      carousel = null;
    }
  })

  function initCarousel() {
    carousel = new Swiper('.__js_store-carousel', {
      speed: 300,
      spaceBetween: 0,
      slidesPerView: 'auto',
      centeredSlides: true,
      /*on: {
        afterInit: function (swiper) {
          let v = swiper.slides[swiper.activeIndex].querySelector('video').play();
        },
        slideChangeTransitionStart: function (swiper) {
          swiper.slides[swiper.previousIndex].querySelector('video').pause();
        },
        slideChangeTransitionEnd: function (swiper) {
          swiper.slides[swiper.activeIndex].querySelector('video').play();
        },
      }*/
    })
  }
  
});
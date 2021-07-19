$(window).on('load', () => {
  let windowWidth = $(window).width();
  let breakpoint = 768;
  let carousel = null;
  let isInit = false;
  
  if (windowWidth <= breakpoint) {
    initCarousel();
    isInit = true;
  }

  $(window).on('resize', function() {
    windowWidth = $(window).width();
    
    if (windowWidth <= breakpoint && !isInit) {
      initCarousel();
      isInit = true;
    } else if (windowWidth > breakpoint && isInit) {
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
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      
    })
  }
  
});
$(window).on('load', () => {
  initCarousel();

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
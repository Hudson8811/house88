$(window).on('load', function() {
  const cards = $('.booking__card');
  let bookingCarousel = null;

  if ($(window).width() <= 768) {
    initBookingCarousel()
  }

  $(window).on('resize', function() {
    if ($(window).width() <= 768) {
      initBookingCarousel()
    } else {
      bookingCarousel = null;
    }
  });

  function initBookingCarousel() {
    bookingCarousel = new Swiper('.booking__main', {
      //loop: true,
      speed: 300,
      spaceBetween: 0,
      slidesPerView: 'auto'
      //20
    })
  }
});
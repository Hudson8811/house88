$(window).on('load', function() {
  let windowWidth = $(window).width();
  const partnersVideos = $('.partnership__video');

  let partnersVideoCarousel = null;

  if (windowWidth <= 768) {
    initPartnersCarousel()
  } 

	$(window).on('resize', function() {
		windowWidth = $(window).width();

    if (windowWidth <= 768) {
      initPartnersCarousel()
    } else {
      partnersVideoCarousel = null;
    }
	});

  function initPartnersCarousel() {
    partnersVideoCarousel = new Swiper('.partnership__grid', {
      //loop: true,
      speed: 300,
      spaceBetween: 0,
      slidesPerView: 'auto',
      centeredSlides: true
      //20
    })
  }
})

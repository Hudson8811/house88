$(window).on('load', function() {
  const filters = $('.booking__filters-item button');
  const cards = $('.booking__card');
  let bookingCarousel = null;

  filters.on('click', onFilterClick);

  if ($(window).width() <= 768) {
    initBookingCarousel()
  }

  function onFilterClick(evt) {
    const current = $(this);
    const target = current.attr('data-target');
    const parent = current.parent();

    cards.each(function() {
      const card = $(this);
      const isVisible = card.attr('data-category').indexOf(target) !== -1;

      if (isVisible) {
        card.removeAttr('style')
      } else {
        card.css('display', 'none')
      }
    });

    
    if ($(window).width() <= 768) {
      bookingCarousel.update();
    }

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
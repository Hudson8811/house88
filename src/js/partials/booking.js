const filters = $('.booking__filters-item button');
const cards = $('.booking__card');

filters.on('click', onFilterClick);

function onFilterClick(evt) {
  const current = $(this);
  const target = current.attr('data-target');
  const parent = current.parent();

  cards.each(function() {
    const card = $(this);
    const isVisible = card.attr('data-category').indexOf(target) !== -1;

    console.log(isVisible)

    if(isVisible) {
      card.removeAttr('style')
    } else {
      card.css('display', 'none')
    }

  })

}
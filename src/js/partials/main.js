$(window).on('load', function() {
	if ($('.select').length){
		$('.select').select2({
			minimumResultsForSearch: Infinity
		});
	}

	$(window).on('click','.tabs-switch__item',function (){
		let index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(this).closest('.tabs-switch').next('.tabs-content').find('.tabs-content__item').eq(index).addClass('active').siblings().removeClass('active');
	});

	$(window).on('click','.accordion__title',function (){
		$(this).parent('.accordion').toggleClass('active').find('.accordion__text').slideToggle('300');
	});




	// Image map resizer init
$(window).on('load', () => {
	 $('map').imageMapResize();
})
	
})
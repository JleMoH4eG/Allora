$(document).ready(function(){
	$('.catalog__slider').slick({
		slidesToShow: 3,
		infinite: false,
		speed: 600,
		draggable: false,
		responsive: [{
			breakpoint: 1290,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 975,
			settings: {
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 441,
			settings: {
				arrows: false,
				slidesToShow: 1,
			}
		}],
	})
})

$(document).ready(function(){
	$('.feedback__slider').slick({
		slidesToShow: 3,
		infinite: false,
		speed: 600,
		draggable: false,
		responsive: [{
			breakpoint: 1290,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 905,
			settings: {
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 441,
			settings: {
				arrows: false,
				slidesToShow: 1,
			}
		}],
	})
})
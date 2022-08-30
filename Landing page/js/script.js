$(document).ready(function() {
	$('.burger-menu, .mobile-menu__link').click (function(event) {
		$('.mobile-menu, .burger-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
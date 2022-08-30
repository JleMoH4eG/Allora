/*mobile menu functional*/

const mobileMenu = document.getElementById('mobile-menu');
const burgerMenu = document.getElementById('burger-menu');
const mobileScreenFogging = document.getElementById('mobile-screen-fogging');

function toggleActiveClass() {
	mobileMenu.classList.toggle('active');
	burgerMenu.classList.toggle('active');
	mobileScreenFogging.classList.toggle('active');
	document.body.classList.toggle('lock');
}

burgerMenu.addEventListener("click", toggleActiveClass);
document.addEventListener("click", (event) => {
	if(event.target.classList.contains('mobile-menu__link') ||
		event.target.classList.contains('mobile-screen-fogging')) {
		toggleActiveClass();
	}
})
//fixed button functional

const FixedButton = document.getElementById('FixedButton')
document.addEventListener("scroll", function() {
	if(window.scrollY >= 300) {
		FixedButton.style.visibility = 'visible';
	}
	else {
		FixedButton.style.visibility = 'hidden';
	}
})
/*button "more" functional*/

const catalog = document.getElementById('catalog');
let catalogItem;

catalog.addEventListener("click", (event) => {
	if(event.target.classList.contains('more')) {
		if(catalogItem) {
			catalogItem.classList.remove('active');
		}
		let more = event.target;
		catalogItem = more.closest('.catalog__slider-item');
		catalogItem.classList.add('active');
	}
	else {
		if(catalogItem && !(event.target.closest('.active'))) {
			catalogItem.classList.remove('active');
		}
	}
})
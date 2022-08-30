//quetions functional

const General = document.getElementById('General')
const Services = document.getElementById('Services')
const Support = document.getElementById('Support')
const GeneralQuestions = document.getElementById('GeneralQuestions')
const ServicesQuestions = document.getElementById('ServicesQuestions')
const SupportQuestions = document.getElementById('SupportQuestions')

function questions(punct, question) {
	if(!punct.classList.contains('active')) {
		let punctWithActive = document.querySelector('.questions__punct.active')
		punctWithActive.classList.remove('active')
		punct.classList.add('active')
		let questionWithActive = document.querySelector('.questions__question-slider-item.active')
		questionWithActive.classList.remove('active')
		question.classList.add('active')
	}
}

General.onclick = () => questions(General, GeneralQuestions);
Support.onclick = () => questions(Support, SupportQuestions);
Services.onclick = () => questions(Services, ServicesQuestions);
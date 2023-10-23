const pollAnswers = document.querySelector('#poll__answers');
let url = 'https://students.netoservices.ru/nestjs-backend/poll';
const xhr = new XMLHttpRequest();

function getAnswer() {
	alert('Спасибо, ваш голос засчитан!');
	window.location.reload();
}

xhr.open('GET', url);

xhr.onreadystatechange = function() {
	if(xhr.readyState === xhr.DONE && xhr.status === 200) {
		const xhrResponse = JSON.parse(xhr.response);
		let answersArray = xhrResponse.data.answers;
		let title = xhrResponse.data.title;

		const pollTitle = document.querySelector('#poll__title');
		pollTitle.innerHTML = title;
		let answers = [];

		for(const answer of answersArray) {
			let answerButton = document.createElement('button');
			answerButton.className = 'poll__answer';
			answerButton.innerHTML = answer;

			answers.push(answerButton);

			pollAnswers.appendChild(answerButton);
		};

		for(let button of answers) {
			button.addEventListener('click', getAnswer);
		};

	};

};

xhr.send();
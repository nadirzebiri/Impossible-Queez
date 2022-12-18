let categorySelected;
let numQuestionsToBeAsked = 0; // number of questions to be asked
let points = 0; // 1 point = a good answer
let questionsAnswered = []; // contains ids of questions answered

// getters
export function getCategorySelected() {
	return categorySelected;
}

export function getNumQuestionsToBeAsked() {
	return numQuestionsToBeAsked;
}

export function getTotalAnswers() {
	return questionsAnswered.length;
}

export function getPoints() {
	return points;
}

export function getQuestionsAnswered() {
	return questionsAnswered;
}

// setters
export function setCategorySelected(category) {
	categorySelected = category;

	return categorySelected;
}

export function setNumQuestionsToBeAsked(NumQuestions) {
	numQuestionsToBeAsked = NumQuestions;

	return numQuestionsToBeAsked;
}

// other functions
export function addPoint() {
	points++;
	return points;
}

export function addQuestionAnswered(id) {
	questionsAnswered.push(id);
}

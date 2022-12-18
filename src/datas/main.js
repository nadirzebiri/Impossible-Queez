let categorySelected;
let points = 0; // 1 point = a good answer
let questionsAnswered = []; // contains ids of questions answered

// getters
export function getCategorySelected() {
	return categorySelected;
}

export function getPoints() {
	return points;
}

export function getQuestionsAnswered() {
	return questionsAnswered;
}

export function getTotalAnswers() {
	return questionsAnswered.length;
}

// setters
export function setCategorySelected(category) {
	categorySelected = category;

	return categorySelected;
}

export function addPoint() {
	points++;
	return points;
}

export function addQuestionAnswered(id) {
	questionsAnswered.push(id);
}

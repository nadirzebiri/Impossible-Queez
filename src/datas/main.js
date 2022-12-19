import { questions } from "./questions";

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

export function getNumAnswers() {
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

export function setPoints(pointsUpdate) {
	points = pointsUpdate;

	return points;
}

export function setQuestionsAnswered(questionsAnsweredUpdate) {
	questionsAnswered = questionsAnsweredUpdate;

	return questionsAnswered;
}

// other functions
export function addPoint() {
	points++;
	return points;
}

export function addQuestionAnswered(id) {
	questionsAnswered.push(id);
}

export function clearGame() {
	setCategorySelected(null);
	setNumQuestionsToBeAsked(0);
	setPoints(0);
	setQuestionsAnswered([]);

	return null;
}

// checks if the answer given is right in the question
export function checkAnswerFromId(id, answer) {
	const question = questions.find((question) => question.id === id);

	if (!question) throw new Error("The question answered wasn't found.");

	const isAnswerCorrect = question.choices.find(
		(choice) => choice.answer === answer
	).good;

	if (isAnswerCorrect === null) {
		throw new Error("The answer provided is invalid");
	}

	return isAnswerCorrect;
}

// return a number between min (inclusive) and max (inclusive)
export function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// get a random question not already asked filtered with category name
export function getRandomQuestion() {
	const questionsCanBeAsked = questions.filter(
		(question) =>
			!questionsAnswered.includes(question.id) &&
			question.categoryName === categorySelected
	);

	// return null if there's no question available
	if (questionsCanBeAsked.length === 0) {
		return null;
	}

	// get random question from questions filtered
	return questionsCanBeAsked[getRandomInt(0, questionsCanBeAsked.length - 1)];
}

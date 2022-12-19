import { useLoaderData, redirect } from "react-router-dom";
import {
	getCategorySelected,
	getNumQuestionsToBeAsked,
	getNumAnswers,
	getRandomQuestion,
	getRandomInt,
} from "../datas/main.js";
import "../styles/quiz.css";

export function loader() {
	const categorySelected = getCategorySelected();
	const numQuestionsToBeAsked = getNumQuestionsToBeAsked();
	const numAnswers = getNumAnswers();

	// make sure user has selected the settings of the game
	if (numQuestionsToBeAsked === 0 && !categorySelected) {
		return redirect("/");
	}

	// get a random question not already asked
	const randomQuestion = getRandomQuestion();

	return {
		categorySelected,
		numQuestionsToBeAsked,
		numAnswers,
		randomQuestion,
	};
}

export default function Quiz() {
	const {
		categorySelected,
		numQuestionsToBeAsked,
		numAnswers,
		randomQuestion,
	} = useLoaderData();

	const colorsAnswers = [
		"rainbow-alpha",
		"rainbow-beta",
		"rainbow-gamma",
		"rainbow-delta",
		"rainbow-epsilon",
		"rainbow-zeta",
		"rainbow-lota",
		"rainbow-eta",
		"rainbow-theta",
	];

	function getRandomBorderColor() {
		return (
			"border-color-" + colorsAnswers[getRandomInt(0, colorsAnswers.length - 1)]
		);
	}

	return (
		<>
			<div className='heading'>
				{randomQuestion.image ? (
					<div className='quiz-img-container'>
						<img alt='placeholder' src={randomQuestion.image} />
					</div>
				) : null}
				<h1 className='color-secondary'>{randomQuestion.question}</h1>
			</div>

			<div className='select-answer-grid'>
				{randomQuestion["choices"].map((choice) => (
					<button
						className={"btn " + getRandomBorderColor()}
						key={choice.answer}
					>
						{choice.answer}
					</button>
				))}
			</div>

			<div className='game-stats color-primary-light'>
				<p>Category selected: {categorySelected}</p>
				<p>
					Question {numAnswers} / {numQuestionsToBeAsked}
				</p>
			</div>
		</>
	);
}

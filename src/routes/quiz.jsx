import { useLoaderData, redirect, Form } from "react-router-dom";
import {
	getCategorySelected,
	getNumQuestionsToBeAsked,
	getNumAnswers,
	getRandomQuestion,
	getRandomInt,
	addQuestionAnswered,
	getQuestionsAnswered,
	checkAnswerFromId,
	addPoint,
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

	// redirect to the end if all questions have been asked
	if (numQuestionsToBeAsked <= numAnswers) {
		return redirect("/score");
	}

	// get a random question not already asked
	const randomQuestion = getRandomQuestion();

	// redirect to the end if there's no more question!
	if (!randomQuestion) {
		return redirect(
			"/score?error=" + encodeURIComponent("No more question available!")
		);
	}

	// save the question as answered in an array
	addQuestionAnswered(randomQuestion.id);

	return {
		categorySelected,
		numQuestionsToBeAsked,
		numAnswers,
		randomQuestion,
	};
}

export async function action({ request }) {
	const formData = await request.formData();

	// get the id of the last question answered
	const questionId = getQuestionsAnswered().at(-1);
	// get answer of the player
	const answer = Object.keys(Object.fromEntries(formData))[0];

	// give a point if the answer is correct
	if (checkAnswerFromId(questionId, answer)) {
		addPoint();
	}

	return null;
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

			<Form method='post'>
				<div className='select-answer-grid'>
					{randomQuestion["choices"].map((choice) => (
						<button
							name={choice.answer}
							className={"btn " + getRandomBorderColor()}
							key={choice.answer}
						>
							{choice.answer}
						</button>
					))}
				</div>
			</Form>

			<div className='game-stats color-primary-light'>
				<p>
					Question {numAnswers + 1} / {numQuestionsToBeAsked}
				</p>
				<p>Category selected: {categorySelected}</p>
			</div>
		</>
	);
}

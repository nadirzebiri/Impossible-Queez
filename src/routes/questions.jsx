import { redirect } from "react-router-dom";
import { Form } from "react-router-dom";
import { setNumQuestionsToBeAsked } from "../datas/main.js";
import "../styles/questions.css";

export async function action({ request }) {
	const formData = await request.formData();
	// check if other input contains a number
	// if true, set the number of questions to be asked for it
	// else set for the button number
	if (Object.fromEntries(formData).other) {
		setNumQuestionsToBeAsked(parseInt(Object.fromEntries(formData).other));
	} else {
		setNumQuestionsToBeAsked(
			parseInt(Object.keys(Object.fromEntries(formData))[0])
		);
	}

	return redirect("/quiz");
}

export default function Questions() {
	return (
		<>
			<div className='heading'>
				<h1 className='color-secondary'>How many queestions?</h1>
			</div>
			<Form method='post'>
				<div className='select-questions-grid'>
					<button className='btn btn-outline' name='10'>
						10
					</button>
					<button className='btn btn-outline' name='20'>
						20
					</button>
					<div className='btn btn-outline' name='other'>
						Other:{" "}
						<input
							name='other'
							className='select-questions-input'
							type='number'
							placeholder='nb'
						/>
					</div>
				</div>
			</Form>
		</>
	);
}

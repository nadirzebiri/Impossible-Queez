import { Link, useLoaderData } from "react-router-dom";
import { getPoints, getNumAnswers } from "../datas/main.js";

import facebookIcon from "../assets/svg/facebook-icon.svg";
import twitterIcon from "../assets/svg/twitter-icon.svg";
import "../styles/score.css";
import { redirect } from "react-router-dom";

export function loader({ request }) {
	const url = new URL(request.url);
	const error = url.searchParams.get("error");

	// if no question has been answered, get back home
	if (getNumAnswers() === 0) {
		return redirect("/");
	}

	return { error };
}

export default function Score() {
	const { error } = useLoaderData();

	return (
		<>
			<div className='heading'>
				<h1 className='color-secondary'>
					Score: {Math.round((getPoints() / getNumAnswers()) * 100)}%
				</h1>
				{error ? <p>{error}</p> : <p>You deserve it. Pls Share</p>}
			</div>
			<div className='share-social-grid'>
				<Link className='btn border-color-rainbow-eta' to='#'>
					<img className='share-social-icon' src={twitterIcon} alt='' />
					Twitter
				</Link>
				<Link className='btn border-color-rainbow-theta' to='#'>
					<img className='share-social-icon' src={facebookIcon} alt='' />
					Facebook
				</Link>
				<Link className='btn' to='/'>
					Play Again
				</Link>
			</div>
		</>
	);
}

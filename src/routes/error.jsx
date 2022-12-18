import { useRouteError, Link } from "react-router-dom";

import "../styles/error.css";

export default function Error() {
	const error = useRouteError();
	console.log(error);

	return (
		<>
			<main className='container'>
				<div className='heading'>
					<h1 className='color-secondary'>Oops!</h1>
					<h2>Sorry, an error has occured!</h2>
					<p className='color-primary-light error-status-text'>
						{error.statusText || error.message}
					</p>
				</div>
				<Link to='/' className='btn'>
					Get back home
				</Link>
			</main>
		</>
	);
}

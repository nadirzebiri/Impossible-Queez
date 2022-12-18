import { useRouteError } from "react-router-dom";

export default function Error() {
	const error = useRouteError();
	console.log(error);

	return (
		<>
			<main className='container'>{error.statusText}</main>
		</>
	);
}

import { Outlet } from "react-router-dom";

import "../styles/variables.css";
import "../styles/typo.css";
import "../styles/root.css";

export default function Root() {
	return (
		<main className='container'>
			<Outlet />
		</main>
	);
}

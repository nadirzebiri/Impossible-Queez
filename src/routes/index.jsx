import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import "../styles/index.css";

export default function Index() {
	return (
		<>
			<img className='logo' src={logo} alt='logo' />
			<p>
				<span className='color-danger'>WARNING</span>: this quiz is only for
				smart people
			</p>
			<Link to='/categories' className='btn start-btn'>
				START
			</Link>
		</>
	);
}

import { Form, useLoaderData, redirect } from "react-router-dom";
import { categories } from "../datas/categories";
import { setCategorySelected } from "../datas/main.js";
import "../styles/categories.css";

export function loader() {
	return { categories };
}

export async function action({ request }) {
	const formData = await request.formData();
	const categorySelected = Object.keys(Object.fromEntries(formData))[0];

	setCategorySelected(categorySelected);
	return redirect("/questions");
}

export default function Categories() {
	const { categories } = useLoaderData();

	return (
		<>
			<div className='heading'>
				<h1>
					Choose a <span className='color-danger'>category</span>:
				</h1>
			</div>
			<Form method='post'>
				<div className='select-category-grid'>
					{categories.map((category) => (
						<button
							key={category.name}
							name={category.name}
							className='select-category'
							style={{
								background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${category.img})`,
							}}
						>
							<h2>{category.name}</h2>
						</button>
					))}
				</div>
			</Form>
		</>
	);
}

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// root route + root index
import Root from "./routes/root";
import Index from "./routes/index";

// routes
import Categories, { action as actionCategories } from "./routes/categories";
import Questions, {
	loader as loaderQuestions,
	action as actionQuestions,
} from "./routes/questions";
import Quiz, { loader as loaderQuiz } from "./routes/quiz";

// error page
import Error from "./routes/error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <Error />,
		children: [
			{
				children: [
					{ index: true, element: <Index /> },
					{
						path: "categories",
						element: <Categories />,
						action: actionCategories,
					},
					{
						path: "questions",
						element: <Questions />,
						loader: loaderQuestions,
						action: actionQuestions,
					},
					{
						path: "quiz",
						element: <Quiz />,
						loader: loaderQuiz,
					},
				],
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

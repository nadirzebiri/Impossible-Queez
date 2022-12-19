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
import Quiz, {
	loader as loaderQuiz,
	action as actionQuiz,
} from "./routes/quiz";
import Score, { loader as loaderScore } from "./routes/score";

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
						action: actionQuiz,
					},
					{
						path: "score",
						element: <Score />,
						loader: loaderScore,
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

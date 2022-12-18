import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// root route + root index
import Root from "./routes/root";
import Index from "./routes/index";

// routes
import Categories, {
	loader as loaderCategories,
	action as actionCategories,
} from "./routes/categories";
import Questions, { action as actionQuestions } from "./routes/questions";

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
						loader: loaderCategories,
						action: actionCategories,
					},
					{
						path: "questions",
						element: <Questions />,
						action: actionQuestions,
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

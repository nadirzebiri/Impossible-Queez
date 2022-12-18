import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Route from "./routes/root";
import Index from "./routes/index";
import Categories, {
	loader as loaderCategories,
	action as actionCategories,
} from "./routes/categories";
import Error from "./routes/error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Route />,
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

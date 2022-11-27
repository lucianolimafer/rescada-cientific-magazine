import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ArticleDetailsPage } from "../pages/article/article-details-page";

import { HomePage } from "../pages/home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/article/:id",
    element: <ArticleDetailsPage />,
  },
]);

export function RouteConfig() {
  return (
    <RouterProvider router={routes} />
  );
}

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ArticleDetailsPage } from "../pages/article/article-details-page";

import { HomePage } from "../pages/home";
import { SignInPage } from "../pages/signin";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/article/:id",
    element: <ArticleDetailsPage />,
  },
  {
    path: "/signin",
    element: <SignInPage />
  }
]);

export function RouteConfig() {
  return (
    <RouterProvider router={routes} />
  );
}

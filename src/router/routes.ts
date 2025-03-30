import { createBrowserRouter } from "react-router";
import { App } from "../App";
import { ErrorPage } from "../pages/error/ErrorPage";
import { HomePage } from "../pages/home/HomePage";

export const routeBrowser = createBrowserRouter([
  {
    path: "/",
    Component: App,
    ErrorBoundary: ErrorPage,
    children: [{ path: "/", Component: HomePage }],
  },
]);

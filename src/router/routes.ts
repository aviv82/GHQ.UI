import { createBrowserRouter } from "react-router";
import App from "../App";

export const routeBrowser = createBrowserRouter([
{
  path:"/",
  Component: App,
  children : [],
}
]);
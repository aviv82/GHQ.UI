import { createBrowserRouter } from "react-router";
import { App } from "../App";
import { ErrorPage } from "../pages/error/ErrorPage";
import { HomePage } from "../pages/home/HomePage";
import { getHealth } from "../services/healthServices";
import { getAllGames } from "../services/gameServices";
import { GamePage } from "../pages/games/GamePage";

export const routeBrowser = createBrowserRouter([
  {
    path: "/",
    Component: App,
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: "/",
        loader: async () => {
          return { health: await getHealth() };
        },
        Component: HomePage,
      },
      {
        path: "/games",
        loader: async () => {
          return { games: await getAllGames() };
        },
        Component: GamePage,
      },
    ],
  },
]);

import { useLoaderData } from "react-router";
import "./gamePage.css";

export const GamePage = () => {
  const games = useLoaderData();

  return (
    <div className="game-page">
      <pre>{JSON.stringify(games, null, 2)}</pre>
    </div>
  );
};

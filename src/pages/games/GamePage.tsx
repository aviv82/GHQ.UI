import { useLoaderData } from "react-router";
import "./gamePage.css";
import { GameVm } from "../../models/game/gameVm";

export const GamePage = () => {
  const games = useLoaderData();

  const gamesToShow: GameVm[] = games.games.gameList;

  const sampleGame: GameVm = { id: 0, title: "", image: "", type: 0, dmId: 0 };

  return (
    <div className="game-page">
      {gamesToShow && (
        <table className="game-page-table">
          <thead className="game-page-thead">
            <tr>
              {Object.entries(sampleGame).map(([k], i) => (
                <th key={i} className="game-page-th">
                  {k.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="game-page-tbody">
            {Object.entries(gamesToShow).map(([, v], i) => (
              <tr key={i} className="game-page-tr">
                <td key={i + 1} className="game-page-td">
                  {v.id}
                </td>
                <td key={i + 2} className="game-page-td">
                  {v.title}
                </td>
                <td key={i + 3} className="game-page-td">
                  {v.image ?? "n/a"}
                </td>
                <td key={i + 4} className="game-page-td">
                  {v.type}
                </td>
                <td key={i + 5} className="game-page-td">
                  {v.dmId}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

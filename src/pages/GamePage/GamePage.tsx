import Game from "../../components/game/Game";
import { useState } from "react";

export default function GamePage() {
  const [background, setBackground] = useState(false);
  return (
    <main className="game-page" data-background={background ? "red" : "green"}>
      <div className="game-header">
        <h1 className="game-title">
          Video
          <span> Poker</span>
        </h1>
        <button
          className="theme-btn"
          type="button"
          onClick={() => setBackground((previous) => !previous)}
        >
          Change theme
        </button>
      </div>
      <Game />
    </main>
  );
}

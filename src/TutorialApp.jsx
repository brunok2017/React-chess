import { useMemo } from "react";
import { Game } from "./Game";
import { Board } from "./Board.jsx";

export const TutorialApp = () => {
  const game = useMemo(() => new Game(), []);
  return (
    <div>
      <Board game={game} />
    </div>
  );
};

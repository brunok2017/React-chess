import { useEffect, useState, createContext } from "react";
import { BoardSquare } from "./BoardSquare";
import { PieceWrapper } from "./PieceWrapper";
import "./style.css";

const containerStyle = {
  position: "relative",
  width: 500,
  height: 500,
  margin: "auto",
  border: "1px solid gray",
};

const whiteTurnStyle = {
  position: "relative",
  left: 550,
  top: -450,
  width: 150,
  color: "black",
  backgroundColor: "white",
  textAlign: "center",
  border: "2px solid black",
  borderRadius: 15,
};

const blackTurnStyle = {
  position: "relative",
  left: 550,
  top: -100,
  width: 150,
  color: "white",
  backgroundColor: "black",
  textAlign: "center",
  border: "2px solid black",
  borderRadius: 15,
};

const winnerStyle = {
  position: "relative",
  left: 550,
  top: -275,
  width: 200,
  color: "white",
  backgroundColor: "green",
  textAlign: "center",
  border: "2px solid black",
  borderRadius: 15,
};

const gameOverStyle = {
  position: "relative",
  margin: "auto",
  top: -375,
  width: "80%",
  height: "30%",
  color: "black",
  backgroundColor: "white",
  textAlign: "center",
  border: "5px solid black",
  borderRadius: 15,
};

/** Styling properties applied to the board element */
const boardStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
};
/** Styling properties applied to each square element */
const squareStyle = { width: "12.5%", height: "12.5%" };

export const UserContext = createContext({});

/**
 * The chessboard component
 * @param props The react props
 */
export const Board = ({ game }) => {
  // const [[knightX, knightY], setKnightPos] = useState(game.knightPosition);
  const [gameStatus, setgameStatus] = useState(game.gameStatus);
  // const [turn, setTurn] = useState(game.whiteTurn);
  // useEffect(() => game.observe(setKnightPos));
  useEffect(() => game.observe2(setgameStatus), [setgameStatus]);

  const turn = gameStatus.whiteTurn;

  function renderSquare2(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const pieceName = Object.keys(gameStatus.PiecesPosition).find(
      (key, index) =>
        gameStatus.PiecesPosition[key][0] === x &&
        gameStatus.PiecesPosition[key][1] === y
    );
    return (
      <div key={i} style={squareStyle}>
        <BoardSquare x={x} y={y} game={game}>
          <PieceWrapper pieceName={pieceName} />
        </BoardSquare>
      </div>
    );
  }

  const squares = [];
  for (let i = 0; i < 64; i += 1) {
    squares.push(renderSquare2(i));
  }
  return (
    <UserContext.Provider value={gameStatus}>
      <div>
        <div style={containerStyle}>
          <div style={boardStyle}>{squares}</div>
          {!gameStatus.winner ? (
            <div style={gameStatus.whiteTurn ? whiteTurnStyle : blackTurnStyle}>
              <h3>
                {gameStatus.whiteTurn ? "Move for White" : "Move for Black"}
              </h3>
            </div>
          ) : (
            <div>
              <div style={winnerStyle}>
                <h3>{gameStatus.winner} win</h3>
              </div>
              <div style={gameOverStyle}>
                <div className="blink_me">
                  <h1>Game Over</h1>
                </div>
              </div>
            </div>
          )}
          <div className="container">
            <div className="center">
              <button className="btn" onClick={() => game.reset()}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
};

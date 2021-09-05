import { canMoveKnight } from "./moves/knightMove";
import { canMoveRook } from "./moves/rookMove";
import { canMoveBishop } from "./moves/bishopMove";
import { canMoveKing } from "./moves/kingMove";
import { canMoveQueen } from "./moves/queenMove";
import { canMoveBlackPawn, canMoveWhitePawn } from "./moves/pawnMove";

export class Game {
  constructor() {
    this.gameStatus = {
      PiecesPosition: {
        blackKing: [4, 7],
        blackQueen: [3, 7],
        blackKnightOne: [1, 7],
        blackKnightTwo: [6, 7],
        blackRookOne: [0, 7],
        blackRookTwo: [7, 7],
        blackBishopOne: [2, 7],
        blackBishopTwo: [5, 7],
        blackPawnOne: [0, 6],
        blackPawnTwo: [1, 6],
        blackPawnThree: [2, 6],
        blackPawnFour: [3, 6],
        blackPawnFive: [4, 6],
        blackPawnSix: [5, 6],
        blackPawnSeven: [6, 6],
        blackPawnEight: [7, 6],

        whiteKing: [4, 0],
        whiteQueen: [3, 0],
        whiteKnightOne: [1, 0],
        whiteKnightTwo: [6, 0],
        whiteRookOne: [0, 0],
        whiteRookTwo: [7, 0],
        whiteBishopOne: [2, 0],
        whiteBishopTwo: [5, 0],
        whitePawnOne: [0, 1],
        whitePawnTwo: [1, 1],
        whitePawnThree: [2, 1],
        whitePawnFour: [3, 1],
        whitePawnFive: [4, 1],
        whitePawnSix: [5, 1],
        whitePawnSeven: [6, 1],
        whitePawnEight: [7, 1],
      },
      whiteTurn: true,
      fallenPieces: [],
      winner: null,
    };
    this.observers2 = [];
  }

  observe2(o) {
    this.observers2.push(o);
    this.emitChange2();
    return () => {
      this.observers2 = this.observers2.filter((t) => t !== o);
    };
  }

  canMove(toX, toY, pieceType) {
    switch (pieceType) {
      case "blackKing":
      case "whiteKing":
        return canMoveKing(toX, toY, pieceType, this.gameStatus.PiecesPosition);
      case "blackQueen":
      case "whiteQueen":
        return canMoveQueen(
          toX,
          toY,
          pieceType,
          this.gameStatus.PiecesPosition
        );
      case "blackKnightOne":
      case "blackKnightTwo":
      case "whiteKnightOne":
      case "whiteKnightTwo":
        return canMoveKnight(
          toX,
          toY,
          pieceType,
          this.gameStatus.PiecesPosition
        );
      case "blackRookOne":
      case "blackRookTwo":
      case "whiteRookOne":
      case "whiteRookTwo":
        return canMoveRook(toX, toY, pieceType, this.gameStatus.PiecesPosition);
      case "blackBishopOne":
      case "blackBishopTwo":
      case "whiteBishopOne":
      case "whiteBishopTwo":
        return canMoveBishop(
          toX,
          toY,
          pieceType,
          this.gameStatus.PiecesPosition
        );
      case "blackPawnOne":
      case "blackPawnTwo":
      case "blackPawnThree":
      case "blackPawnFour":
      case "blackPawnFive":
      case "blackPawnSix":
      case "blackPawnSeven":
      case "blackPawnEight":
        return canMoveBlackPawn(
          toX,
          toY,
          pieceType,
          this.gameStatus.PiecesPosition
        );
      case "whitePawnOne":
      case "whitePawnTwo":
      case "whitePawnThree":
      case "whitePawnFour":
      case "whitePawnFive":
      case "whitePawnSix":
      case "whitePawnSeven":
      case "whitePawnEight":
        return canMoveWhitePawn(
          toX,
          toY,
          pieceType,
          this.gameStatus.PiecesPosition
        );
    }
  }
  canDrag(isWhite) {
    return isWhite === this.gameStatus.whiteTurn;
  }

  movePiece(toX, toY, pieceName) {
    const fallenPieces = Object.keys(this.gameStatus.PiecesPosition).find(
      (key, index) =>
        this.gameStatus.PiecesPosition[key][0] === toX &&
        this.gameStatus.PiecesPosition[key][1] === toY
    );
    if (fallenPieces) {
      this.gameStatus.PiecesPosition[fallenPieces] = [null, null];
      this.gameStatus.fallenPieces.push(fallenPieces);
      if (fallenPieces === "whiteKing") this.gameStatus.winner = "black";
      if (fallenPieces === "blackKing") this.gameStatus.winner = "white";
    }
    this.gameStatus.PiecesPosition[pieceName] = [toX, toY];
    this.gameStatus.whiteTurn = !this.gameStatus.whiteTurn;
    this.emitChange2();
  }
  reset() {
    this.gameStatus = {
      PiecesPosition: {
        blackKing: [4, 7],
        blackQueen: [3, 7],
        blackKnightOne: [1, 7],
        blackKnightTwo: [6, 7],
        blackRookOne: [0, 7],
        blackRookTwo: [7, 7],
        blackBishopOne: [2, 7],
        blackBishopTwo: [5, 7],
        blackPawnOne: [0, 6],
        blackPawnTwo: [1, 6],
        blackPawnThree: [2, 6],
        blackPawnFour: [3, 6],
        blackPawnFive: [4, 6],
        blackPawnSix: [5, 6],
        blackPawnSeven: [6, 6],
        blackPawnEight: [7, 6],

        whiteKing: [4, 0],
        whiteQueen: [3, 0],
        whiteKnightOne: [1, 0],
        whiteKnightTwo: [6, 0],
        whiteRookOne: [0, 0],
        whiteRookTwo: [7, 0],
        whiteBishopOne: [2, 0],
        whiteBishopTwo: [5, 0],
        whitePawnOne: [0, 1],
        whitePawnTwo: [1, 1],
        whitePawnThree: [2, 1],
        whitePawnFour: [3, 1],
        whitePawnFive: [4, 1],
        whitePawnSix: [5, 1],
        whitePawnSeven: [6, 1],
        whitePawnEight: [7, 1],
      },
      whiteTurn: true,
      fallenPieces: [],
      winner: null,
    };
    this.emitChange2();
  }
  emitChange2() {
    const pos = this.gameStatus;
    this.observers2.forEach((o) => o && o({ ...pos }));
  }
}

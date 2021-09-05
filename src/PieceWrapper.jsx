import { DragPreviewImage, useDrag } from "react-dnd";
import { Piece } from "./pieces/Piece";
import { ItemTypes } from "./ItemTypes";

const pieceWrapStyle = {
  position: "relative",
  left: "0.55rem",
};

function getPiece(type) {
  switch (type) {
    case "blackKing":
      return <Piece pieceType={ItemTypes.BLACKKING} pieceSym={"♔"} />;
    case "whiteKing":
      return (
        <Piece
          pieceType={ItemTypes.WHITEKING}
          pieceColor={"white"}
          pieceSym={"♔"}
        />
      );
    case "blackQueen":
      return <Piece pieceType={ItemTypes.BLACKQUEEN} pieceSym={"♕"} />;
    case "whiteQueen":
      return (
        <Piece
          pieceType={ItemTypes.WHITEQUEEN}
          pieceColor={"white"}
          pieceSym={"♕"}
        />
      );
    case "blackKnightOne":
      return <Piece pieceType={ItemTypes.BLACKKNIGHTONE} pieceSym={"♘"} />;
    case "blackKnightTwo":
      return <Piece pieceType={ItemTypes.BLACKKNIGHTTWO} pieceSym={"♘"} />;
    case "whiteKnightOne":
      return (
        <Piece
          pieceType={ItemTypes.WHITEKNIGHTONE}
          pieceColor={"white"}
          pieceSym={"♘"}
        />
      );
    case "whiteKnightTwo":
      return (
        <Piece
          pieceType={ItemTypes.WHITEKNIGHTTWO}
          pieceColor={"white"}
          pieceSym={"♘"}
        />
      );
    case "blackRookOne":
      return <Piece pieceType={ItemTypes.BLACKROOKONE} pieceSym={"♖"} />;
    case "blackRookTwo":
      return <Piece pieceType={ItemTypes.BLACKROOKTWO} pieceSym={"♖"} />;
    case "whiteRookOne":
      return (
        <Piece
          pieceType={ItemTypes.WHITEROOKONE}
          pieceColor={"white"}
          pieceSym={"♖"}
        />
      );
    case "whiteRookTwo":
      return (
        <Piece
          pieceType={ItemTypes.WHITEROOKTWO}
          pieceColor={"white"}
          pieceSym={"♖"}
        />
      );
    case "blackBishopOne":
      return <Piece pieceType={ItemTypes.BLACKBISHOPONE} pieceSym={"♗"} />;
    case "blackBishopTwo":
      return <Piece pieceType={ItemTypes.BLACKBISHOPTWO} pieceSym={"♗"} />;
    case "whiteBishopOne":
      return (
        <Piece
          pieceType={ItemTypes.WHITEBISHOPONE}
          pieceColor={"white"}
          pieceSym={"♗"}
        />
      );
    case "whiteBishopTwo":
      return (
        <Piece
          pieceType={ItemTypes.WHITEBISHOPTWO}
          pieceColor={"white"}
          pieceSym={"♗"}
        />
      );
    case "blackPawnOne":
      return <Piece pieceType={ItemTypes.BLACKPAWNONE} pieceSym={"♙"} />;
    case "blackPawnTwo":
      return <Piece pieceType={ItemTypes.BLACKPAWNTWO} pieceSym={"♙"} />;
    case "blackPawnThree":
      return <Piece pieceType={ItemTypes.BLACKPAWNTHREE} pieceSym={"♙"} />;
    case "blackPawnFour":
      return <Piece pieceType={ItemTypes.BLACKPAWNFOUR} pieceSym={"♙"} />;
    case "blackPawnFive":
      return <Piece pieceType={ItemTypes.BLACKPAWNFIVE} pieceSym={"♙"} />;
    case "blackPawnSix":
      return <Piece pieceType={ItemTypes.BLACKPAWNSIX} pieceSym={"♙"} />;
    case "blackPawnSeven":
      return <Piece pieceType={ItemTypes.BLACKPAWNSEVEN} pieceSym={"♙"} />;
    case "blackPawnEight":
      return <Piece pieceType={ItemTypes.BLACKPAWNEIGHT} pieceSym={"♙"} />;
    case "whitePawnOne":
      return (
        <Piece
          pieceType={ItemTypes.WHITEPAWNONE}
          pieceColor={"white"}
          pieceSym={"♙"}
        />
      );
    case "whitePawnTwo":
      return (
        <Piece
          pieceType={ItemTypes.WHITEPAWNTWO}
          pieceColor={"white"}
          pieceSym={"♙"}
        />
      );
    case "whitePawnThree":
      return (
        <Piece
          pieceType={ItemTypes.WHITEPAWNTHREE}
          pieceColor={"white"}
          pieceSym={"♙"}
        />
      );
    case "whitePawnFour":
      return (
        <Piece
          pieceType={ItemTypes.WHITEPAWNFOUR}
          pieceColor={"white"}
          pieceSym={"♙"}
        />
      );
    case "whitePawnFive":
      return (
        <Piece
          pieceType={ItemTypes.WHITEPAWNFIVE}
          pieceColor={"white"}
          pieceSym={"♙"}
        />
      );
    case "whitePawnSix":
      return (
        <Piece
          pieceType={ItemTypes.WHITEPAWNSIX}
          pieceColor={"white"}
          pieceSym={"♙"}
        />
      );
    case "whitePawnSeven":
      return (
        <Piece
          pieceType={ItemTypes.WHITEPAWNSEVEN}
          pieceColor={"white"}
          pieceSym={"♙"}
        />
      );
    case "whitePawnEight":
      return (
        <Piece
          pieceType={ItemTypes.WHITEPAWNEIGHT}
          pieceColor={"white"}
          pieceSym={"♙"}
        />
      );
  }
}
export const PieceWrapper = ({ pieceName }) =>
  pieceName ? (
    <div
      style={{
        ...pieceWrapStyle,
      }}
    >
      {getPiece(pieceName)}
    </div>
  ) : null;

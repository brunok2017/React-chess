import { DragPreviewImage, useDrag } from "react-dnd";
import { useContext } from "react";
import { ItemTypes } from "../ItemTypes";
import { UserContext } from "../Board";

const pieceStyle = {
  fontSize: 40,
  fontWeight: "bold",
  cursor: "move",
};

export const Piece = ({ pieceType, pieceSym, pieceColor }) => {
  const isWhite = pieceType.includes("white");
  const gameStatus = useContext(UserContext);

  const [{ isDragging, canDrag }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.PIECE,
      item: { pieceType },
      canDrag: isWhite === gameStatus.whiteTurn,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
        canDrag: !!monitor.canDrag(),
      }),
    }),
    [gameStatus]
  );
  return (
    // <>
    //   <DragPreviewImage connect={preview} src={knightImage} />
    <div
      ref={drag}
      style={{
        ...pieceStyle,
        color: pieceColor,
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {pieceSym}
    </div>
    // </>
  );
};

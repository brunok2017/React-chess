import { useDrop } from "react-dnd";
import { Square } from "./Square";
import { ItemTypes } from "./ItemTypes";
import { Overlay, OverlayType } from "./Overlay";
export const BoardSquare = ({ x, y, game, children }) => {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      // accept: (monitor) => monitor.getItemType(),
      accept: ItemTypes.PIECE,
      canDrop: (item, monitor) => game.canMove(x, y, item.pieceType),
      drop: (item) => game.movePiece(x, y, item.pieceType),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [game]
  );
  const bgBlack = (x + y) % 2 === 1;
  return (
    <div
      ref={drop}
      role="Space"
      data-testid={`(${x},${y})`}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Square bgBlack={bgBlack}>{children}</Square>
      {isOver && !canDrop && <Overlay type={OverlayType.IllegalMoveHover} />}
      {!isOver && canDrop && <Overlay type={OverlayType.PossibleMove} />}
      {isOver && canDrop && <Overlay type={OverlayType.LegalMoveHover} />}
    </div>
  );
};

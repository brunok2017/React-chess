import { DragPreviewImage, useDrag } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
// import { knightImage } from './knightImage';
const QueenStyle = {
  fontSize: 40,
  fontWeight: "bold",
  cursor: "move",
};
export const Queen = () => {
  const pieceType = ItemTypes.QUEEN;
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.PIECE,
      item: { pieceType },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );
  return (
    // <>
    //   <DragPreviewImage connect={preview} src={knightImage} />
    <div
      ref={drag}
      style={{
        ...QueenStyle,
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      ♛
    </div>
    // </>
  );
};

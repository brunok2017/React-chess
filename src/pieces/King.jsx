import { DragPreviewImage, useDrag } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
// import { knightImage } from './knightImage';
const kingStyle = {
  fontSize: 40,
  fontWeight: "bold",
  cursor: "move",
};
export const King = () => {
  const pieceType = ItemTypes.KING;
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
        ...kingStyle,
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      ♚
    </div>
    // </>
  );
};

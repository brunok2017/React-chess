export const canMoveKnight = (toX, toY, pieceType, piecePos) => {
  const [x, y] = piecePos[pieceType];
  const isAlly = false;
  const isOccupied = Object.keys(piecePos).find(
    (key, index) => piecePos[key][0] === toX && piecePos[key][1] === toY
  );
  if (isOccupied) {
    isAlly = pieceType.includes("white") === isOccupied.includes("white");
  }
  const dx = toX - x;
  const dy = toY - y;
  return (
    ((Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2)) &&
    !isAlly
  );
};

export const canMoveKing = (toX, toY, pieceType, piecePos) => {
  const [x, y] = piecePos[pieceType];
  let isAlly = false;
  const isOccupied = Object.keys(piecePos).find(
    (key, index) => piecePos[key][0] === toX && piecePos[key][1] === toY
  );
  if (isOccupied) {
    isAlly = pieceType.includes("white") === isOccupied.includes("white");
  }

  if (
    (x === toX && y === toY + 1) ||
    (x === toX && y === toY - 1) ||
    (y === toY && x === toX + 1) ||
    (y === toY && x === toX - 1) ||
    (y === toY + 1 && x === toX + 1) ||
    (y === toY - 1 && x === toX + 1) ||
    (y === toY - 1 && x === toX - 1) ||
    (y === toY + 1 && x === toX - 1)
  ) {
    return !isAlly;
  } else {
    return false;
  }
};

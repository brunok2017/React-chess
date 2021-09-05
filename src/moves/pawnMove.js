export const canMoveBlackPawn = (toX, toY, pieceType, piecePos) => {
  const [x, y] = piecePos[pieceType];
  let isAlly = false;
  const isOccupied = Object.keys(piecePos).find(
    (key, index) => piecePos[key][0] === toX && piecePos[key][1] === toY
  );
  if (isOccupied) {
    isAlly = pieceType.includes("white") === isOccupied.includes("white");
  }
  if (y === 6) {
    if (toX === x && toY < y && toY > y - 3) {
      return !isAlly;
    }
  }
  if (toX === x && toY < y && toY > y - 2) {
    return !isAlly;
  }
  return false;
};

export const canMoveWhitePawn = (toX, toY, pieceType, piecePos) => {
  const [x, y] = piecePos[pieceType];
  let isAlly = false;
  const isOccupied = Object.keys(piecePos).find(
    (key, index) => piecePos[key][0] === toX && piecePos[key][1] === toY
  );
  if (isOccupied) {
    isAlly = pieceType.includes("white") === isOccupied.includes("white");
  }
  if (y === 1) {
    if (toX === x && toY > y && toY < y + 3) {
      return !isAlly;
    }
  }
  if (toX === x && toY > y && toY < y + 2) {
    return !isAlly;
  }
  return false;
};

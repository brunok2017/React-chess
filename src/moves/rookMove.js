export const canMoveRook = (toX, toY, pieceType, piecePos) => {
  const [x, y] = piecePos[pieceType];
  let isBlocked = true;
  let isAlly = false;
  const isOccupied = Object.keys(piecePos).find(
    (key, index) => piecePos[key][0] === toX && piecePos[key][1] === toY
  );

  if (isOccupied) {
    isAlly = pieceType.includes("white") === isOccupied.includes("white");
  }

  if (y > toY && x === toX) {
    isBlocked = Object.keys(piecePos).find(
      (key) =>
        toY < piecePos[key][1] && piecePos[key][1] < y && piecePos[key][0] === x
    );
  }
  if (y < toY && x === toX) {
    isBlocked = Object.keys(piecePos).find(
      (key) =>
        y < piecePos[key][1] && piecePos[key][1] < toY && piecePos[key][0] === x
    );
  }
  if (x > toX && y === toY) {
    isBlocked = Object.keys(piecePos).find(
      (key) =>
        toX < piecePos[key][0] && piecePos[key][0] < x && piecePos[key][1] === y
    );
  }
  if (x < toX && y === toY) {
    isBlocked = Object.keys(piecePos).find(
      (key) =>
        x < piecePos[key][0] && piecePos[key][0] < toX && piecePos[key][1] === y
    );
  }

  return toggleFlag(isBlocked) && !isAlly;
};

function toggleFlag(value) {
  var toggle = value ? false : true;
  return toggle;
}

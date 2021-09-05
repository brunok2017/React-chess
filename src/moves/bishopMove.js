export const canMoveBishop = (toX, toY, pieceType, piecePos) => {
  const [x, y] = piecePos[pieceType];
  let isBlocked = true;
  let isAlly = false;
  let c = null,
    c_inv = null,
    toC = null,
    toC_inv = null;
  const isOccupied = Object.keys(piecePos).find(
    (key, index) => piecePos[key][0] === toX && piecePos[key][1] === toY
  );
  if (isOccupied) {
    isAlly = pieceType.includes("white") === isOccupied.includes("white");
  }
  c = y - x;
  c_inv = x + y;
  toC = toY - toX;
  toC_inv = toY + toX;
  if (y > toY && toC === c) {
    isBlocked = Object.keys(piecePos).find(
      (key) =>
        toY < piecePos[key][1] &&
        piecePos[key][1] < y &&
        piecePos[key][1] - piecePos[key][0] === c
    );
  }
  if (y < toY && toC === c) {
    isBlocked = Object.keys(piecePos).find(
      (key) =>
        y < piecePos[key][1] &&
        piecePos[key][1] < toY &&
        piecePos[key][1] - piecePos[key][0] === c
    );
  }

  if (y > toY && toC_inv === c_inv) {
    isBlocked = Object.keys(piecePos).find(
      (key) =>
        toY < piecePos[key][1] &&
        piecePos[key][1] < y &&
        piecePos[key][1] + piecePos[key][0] === c_inv
    );
  }
  if (y < toY && toC_inv === c_inv) {
    isBlocked = Object.keys(piecePos).find(
      (key) =>
        y < piecePos[key][1] &&
        piecePos[key][1] < toY &&
        piecePos[key][1] + piecePos[key][0] === c_inv
    );
  }

  return toggleFlag(isBlocked) && !isAlly;
};

function toggleFlag(value) {
  var toggle = value ? false : true;
  return toggle;
}

const squareStyle = {
  width: "100%",
  height: "100%",
};
export const Square = ({ bgBlack, black, children }) => {
  const backgroundColor = bgBlack ? "#5E3727" : "#FFE8D6";
  const color = black ? "white" : "black";
  return (
    <div
      style={{
        ...squareStyle,
        color,
        backgroundColor,
      }}
    >
      {children}
    </div>
  );
};

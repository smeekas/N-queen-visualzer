import QueenCell from "../../QueenCell/QueenCell";
import EmptyCell from "../../EmptyCell/EmptyCell";
import styles from "./Result.module.css";
let id, color;

const Result = ({ size, board, index }) => {
  return (
    <div className={styles.resultFlex}>
      <div className={styles.resultNumber}>{index + 1}.</div>
      <div
        style={{
          gridTemplate: `repeat(${size},${
            (8 - size) * 10 + 35
          }px)/repeat(${size},${(8 - size) * 10 + 35}px)`,
        }}
        className={styles.result}
      >
        {board.map((item, i) => {
          return [
            ...[...item].map((cells, j) => {
              color = (i + j) % 2 === 0 ? true : false;
              id = Math.random().toString();

              return cells === "Q" ? (
                <QueenCell bool={color} key={id} />
              ) : (
                <EmptyCell bool={color} key={id} />
              );
            }),
          ];
        })}
      </div>
    </div>
  );
};
export default Result;

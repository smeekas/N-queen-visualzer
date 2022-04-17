import { useState, useEffect } from "react";
import "./Board.css";
import InputRange from "./slider/InputRange";  
import InputSize from "./slider/InputSize";  
import EmptyCell from "./EmptyCell/EmptyCell";
import QueenCell from "./QueenCell/QueenCell";
import { useDispatch, useSelector } from "react-redux";

let interval;
const Board = (props) => {
  const [delay, setDelay] = useState(100);
  //const boards = useSelector((state) => state.queen.board); //initally contain one array(initial State) after clicking algorithm it contain all nested arrays
  const start = useSelector((state) => state.queen.start);
  const size = useSelector((state) => state.queen.size);
  const que = useSelector((state) => state.queen.que);
  const dispatch = useDispatch();
  let id, color;
  // console.log(que);
  // if(!que){
  //   dispatch({type:"FINISHED"})
  //   clearInterval(interval)
  // }
  //const [que, setQue] = useState(boards); //in que only one array of board no nested array
  useEffect(() => {
    if (start) {
      interval = setInterval(() => {
        if (que) {
          // console.log(que)
          dispatch({ type: "CHANGE_ITERATION" });
          dispatch({ type: "CHANGE_RESULT_ITERATION" });
          dispatch({ type: "GET_QUE" });
          // setQue(boards[0]);
          // boards.shift();
        } else {
          dispatch({ type: "FINISHED" });
          clearInterval(interval);
        }
      }, delay);
    } else {
      // console.log("ELSE");
      if (interval) clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start, delay,dispatch, que]);

  return (
    <div>
      <div
        style={{
          // width: `${+size * 80}px`,
          // height: `${+size * 80}px`,
          gridTemplate: `repeat(${size},${
            (8 - size) * 10 + 60
          }px)/repeat(${size},${(8 - size) * 10 + 60}px)`,
        }}
        className="board"
      >
        {que.map((item, i) => {
          return [
            ...[...item].map((cells, j) => {
              color = (i + j) % 2 === 0 ? true : false;
              // console.log(i,j)
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
      <div>
        <div className="sliders">
        <InputSize />
        <InputRange delay={delay} setDelay={setDelay} />
        </div>
      </div>
    </div>
  );
};
export default Board;

//!

import Result from "./Result/Result";
import { useSelector } from "react-redux";
import "./Results.css";
const Results = () => {
  const result = useSelector((state) => state.result.result);
  const size = useSelector((state) => state.queen.size);
  console.log(result)
  // const dummy = ["...Q", "Q...", ".Q..", "...Q"];
  return (
    <div className="results">
      <h2>Solutions</h2>
      <div className="resultBoards">
        {result.map((board, index) => {
          return <Result key={index} index={index} size={size} board={board} />;
        })}
      </div>
    </div>
  );
};
export default Results;

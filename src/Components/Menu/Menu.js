import { useDispatch } from "react-redux";
import solveNQueens from "../../algorithm/backtracking";
import bruteForcePermutations from "../../algorithm/bruteforce";
import { useSelector } from "react-redux";
import "./Menu.css";
function Menu(props) {
  const dispatch = useDispatch();
  const itr = useSelector((state) => state.queen.iteration);
  const size = useSelector((state) => state.queen.size);
  const brutefoce = () => {
    dispatch({ type: "MIDDLE_STOPED", algorithm: "bruteforce" });
    dispatch({ type: "CLEAR" });
    bruteForcePermutations(size);

    dispatch({ type: "CHANGE_ALGO", algorithm: "brutefoce" });
  };
  const backtracking = () => {
    dispatch({ type: "MIDDLE_STOPED", algorithm: "backtracking" });
    dispatch({ type: "CLEAR" });

    solveNQueens(size);
    dispatch({ type: "CHANGE_ALGO", algorithm: "backtracking" });
  };
  return (
    <div className="menu">
  
      <div className="algorithm">
        <button className="algoBtn" onClick={brutefoce}>
          Brute Force
        </button>
        <button className="algoBtn" onClick={backtracking}>
          Backtracking
        </button>
      </div>

      <div className="iterationInfo">
        <h1>Iterations:</h1>
        <div className="iterations">{itr}</div>
      </div>
    </div>
  );
}
export default Menu;

import store from "../store";
let boards=[],solon=[],sol=[],itr=0;
  function solveNQueens(n) {
    let res = [];
    boards=[]
    sol=[]
    itr=0
    solon=[]
    solver(0, [], n, res);
    store.dispatch({type:"ADD_BOARD",board:boards})
    store.dispatch({type:"ADD_RESULT",solution:sol,solutionOn:solon})
    // console.log(solon)
    // console.log(sol)
    return res;
  }
  // let itr = 0;
  function solver(cur_row, colPlacements, n, res) {
    if (cur_row === n) {
      solon.push(itr)
      sol.push(generateBoard(n,colPlacements))
      return;
    }
    for (let col = 0; col < n; col++) {
      colPlacements.push(col);

      itr++;
     const board= generateBoard(n, colPlacements);
      boards.push(board);


      if (isValid(colPlacements)) {
        solver(cur_row + 1, colPlacements, n, res);
      }

      colPlacements.pop();
    }
  }

  function generateBoard(n, colPlacements) {
    let board = [];
    for (let row = 0; row < n; row++) {
      let board_row = [];
      for (let col = 0; col < n; col++) {
        if (col === colPlacements[row]) {
          board_row.push("Q");
        } else {
          board_row.push(".");
        }
      }
      board.push(board_row.join(""));
    }

    return board
  }

  function isValid(colPlacements) {
    let n = colPlacements.length;
    let cur_row = n - 1;

    for (let row = 0; row < cur_row; row++) {
      let colDistance = Math.abs(colPlacements[cur_row] - colPlacements[row]);
      let rowDistance = cur_row - row;
      if (colDistance === 0 || rowDistance === colDistance) {
        return false;
      }
    }
    return true;
  }
 export default solveNQueens;

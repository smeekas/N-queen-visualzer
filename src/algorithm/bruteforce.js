import store from "../store";
let boards = [],
  solon = [],
  sol = [],
  itr = 0;
function bruteForcePermutations(size) {
  var board = [],
    permData;
  // var numChanges;
  boards = [];
  boards = [];
  sol = [];
  itr = 0;
  solon = [];
  for (var i = 0; i < size; i++) board.push(i);
  for (var j = 0; j < factorial(size); j++) {
    permData = nextPerm(board);
    board = permData.perm;
    // numChanges = permData.numChanges;
    if (board) {
      itr++;
      boards.push(bruteBoard(size, board));
      if (noDiagConflicts(board)) {
        // console.log(board)
        solon.push(itr);
        sol.push(bruteBoard(size, board));
        // return board
      }
    }
  }
  store.dispatch({ type: "ADD_RESULT", solution: sol, solutionOn: solon });

  // console.log(solon)
  // console.log(sol)
  store.dispatch({ type: "ADD_BOARD", board: boards });
  return false;
}

function noDiagConflicts(board) {
  var downDiags = [];
  while (downDiags.length < board.length * 2) downDiags.push(false);
  var upDiags = downDiags.slice();
  for (var i = 0; i < board.length; i++) {
    var downDiag = i - board[i] + (board.length - 1);
    if (!downDiags[downDiag]) {
      downDiags[downDiag] = true;
    } else {
      return false;
    }

    var upDiag = i + board[i];
    if (!upDiags[upDiag]) {
      upDiags[upDiag] = true;
    } else {
      return false;
    }
  }
  return true;
}

function factorial(size) {
  var prod = 1;
  for (var i = 1; i <= size; i++) prod *= i;
  return prod;
}

function nextPerm(perm) {
  var swap1 = swapPoint(perm);
  if (swap1 === -1) return perm;
  var swap2 = smallestGreaterOnRight(perm, swap1);

  perm = perm.slice();
  swap(perm, swap1, swap2);
  return {
    perm: perm.slice(0, swap1 + 1).concat(reverseSlice(perm, swap1 + 1)),
    numChanges: perm.length - swap1,
  };
}

function swapPoint(arr) {
  for (var i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) break;
  }
  return i;
}

function smallestGreaterOnRight(arr, point) {
  var minIdx = point + 1;
  for (var i = point + 1; i < arr.length; i++) {
    if (arr[i] > arr[point] && arr[i] < arr[minIdx]) {
      minIdx = i;
    }
  }
  return minIdx;
}

function swap(arr, x, y) {
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function reverseSlice(arr, idx) {
  return arr.slice(idx, arr.length).reverse();
}

function bruteBoard(n, colPlacements) {
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

  // store.dispatch({ type: "change", queen: board });
  // props.store.moveQueen(board);
  //   boards.push(board);/
  return board;
  // console.log(board)
  // await sleep(200);
}

export default bruteForcePermutations;

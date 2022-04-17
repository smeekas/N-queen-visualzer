import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
const intialState = {
  size: 4,
  board: [],
  algorithm: "backtracking",
  start: false,
  iteration: 0,
  que: ["....", "....", "....", "...."],
};
const queenReducer = (state = intialState, action) => {
  if (action.type === "CHANGE_SIZE") {
    let newQue = [];
    for (let i = 0; i < action.size; i++) {
      newQue.push(".".repeat(action.size));
    }
    return { ...state, start: false, size: action.size, que: newQue,iteration:0 };
  }
  if (action.type === "GET_QUE") {
    if (state.board.length === 0) {
      return { ...state, que: state.que, start: false };
    }
    let newBoard = [...state.board];
    let newQue = newBoard[0];
    newBoard.shift();
    // console.log(newQue)
    // console.log(newQue)

    return { ...state, que: newQue, board: newBoard };
  }
  if (action.type === "ADD_BOARD") {
    return {
      size: state.size,
      board: action.board,
      algorithm: state.algorithm,
      start: state.start,
      que: state.que,
      iteration: state.iteration,
    };
  }
  if (action.type === "CHANGE_ALGO") {
    return {
      size: state.size,
      board: state.board,
      que: state.que,
      algorithm: action.algorithm,
      start: true,
      iteration: 0,
    };
  }
  if (action.type === "FINISHED") {
    console.log("finished");
    return { ...state, start: false, iteration: state.iteration };
  }
  if (action.type === "CHANGE_ITERATION") {
    return { ...state, iteration: state.iteration + 1 };
  }
  if (action.type === "MIDDLE_STOPED") {
    return { ...state, start: false, algorithm: action.algorithm };
  }
  return state;
};

const initalResult = {
  solution: [],
  solutionOn: [],
  result: [],
  iteration: 0,
};
const resultReducer = (state = initalResult, action) => {
  if (action.type === "CHANGE_RESULT_ITERATION") {
    let newSolutionOn = [...state.solutionOn];
    let newSolution = [...state.solution];
    let newResult = [...state.result];
    if (state.iteration + 1 === state.solutionOn[0]) {
      newResult.push(state.solution[0]);
      newSolution.shift();
      newSolutionOn.shift();
    }
    return {
      solutionOn: newSolutionOn,
      solution: newSolution,
      iteration: state.iteration + 1,
      result: newResult,
    };
  }
  if (action.type === "ADD_RESULT") {
    console.log(action.solution);
    return {
      solution: action.solution,
      solutionOn: action.solutionOn,
      iteration: state.iteration,
      result: state.result,
    };
  }
  if (action.type === "CLEAR") {
    console.log("CLEAR");
    return {
      solution: [],
      solutionOn: [],
      result: [],
      iteration: 0,
    };
  }

  return state;
};
// const intialSize = {
//   size: 8,
//   initial: [],
// };
// const sizeReducer = (state = intialSize, action) => {
//   if (action.type === "SIZE") {
//     let initialBoard = [];
//     for (let i = 0; i < action.size; i++) {
//       initialBoard.push(".".repeat(action.size));
//     }
//     // console.log(action.size);
//     return { size: action.size, initial: initialBoard };
//   }
//   return state;
// };
const store = createStore(
  combineReducers({
    queen: queenReducer,
    result: resultReducer,
  }),
  composeWithDevTools()
);

export default store;

import "./App.css";
import Board from "./Components/Board";
import Menu from "./Components/Menu/Menu";
import Results from "./Components/Results/Results";

function App() {

  return (
    <div className="App">
     
      <Board />
      <div className="menuResult">

      <Menu />
      <Results />
      </div>
    </div>
  );
}

export default App;

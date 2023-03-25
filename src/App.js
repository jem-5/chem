import "./App.css";
import Chemistry from "./pages/Chemistry";
import { HashRouter, Routes, Route } from "react-router-dom";
import { elementMapEasy } from "./data/ChemistryEasy";
import { elementMapHard } from "./data/ChemistryHard";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";

function App() {
  let easy = elementMapEasy;
  let hard = elementMapHard;

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route
            exact
            path="/chem/easy-chemistry"
            element={<Chemistry difficulty={easy} />}
          />
          <Route
            exact
            path="/chem/hard-chemistry"
            element={<Chemistry difficulty={hard} />}
          />
          <Route exact path="/chem/" element={<Home />} />
          <Route exact path="/chem/leaderboard" element={<Leaderboard />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

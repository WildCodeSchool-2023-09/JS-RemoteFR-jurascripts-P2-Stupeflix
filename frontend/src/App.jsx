import "./styles/App.scss";
import { useState } from "react";
import DisplayGame from "./components/game/DisplayGame";
import DisplayQuizz from "./components/game/quizz/DisplayQuizz";
import DisplayFight from "./components/game/fight/DisplayFight";
import NavBar from "./components/NavBar";

function App() {
  const [page, setPage] = useState({ name: "DisplayGame", id: null });
  return (
    <div className="App">
      <NavBar />
      {page.name === "DisplayGame" && <DisplayGame setPage={setPage} />}
      {page.name === "DisplayQuizz" && <DisplayQuizz setPage={setPage} />}
      {page.name === "DisplayFight" && <DisplayFight />}
    </div>
  );
}

export default App;

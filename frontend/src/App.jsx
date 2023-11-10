import "./styles/App.scss";
import { useState } from "react";
import Home from "./components/game/Home";
import DisplayQuizz from "./components/game/quizz/DisplayQuizz";
import DisplayFight from "./components/game/fight/DisplayFight";
import NavBar from "./components/NavBar";
import DisplayCharact from "./components/game/character/DisplayCharact";

function App() {
  const [page, setPage] = useState({ name: "Home", id: null });
  return (
    <>
      <NavBar />
      <div className="App">
        {page.name === "Home" && <Home setPage={setPage} />}
        {page.name === "DisplayCharact" && <DisplayCharact setPage={setPage} />}
        {page.name === "DisplayQuizz" && <DisplayQuizz setPage={setPage} />}
        {page.name === "DisplayFight" && <DisplayFight />}
      </div>
    </>
  );
}

export default App;

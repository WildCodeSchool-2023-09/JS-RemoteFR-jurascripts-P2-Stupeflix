import { useEffect, useState } from "react";
import axios from "axios";
import CardListWiki from "../components/wiki/CardListWiki";
import NavBar from "../components/NavBar";
import "../styles/Wiki.scss";

function Wiki() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get("https://hp-api.onrender.com/api/characters")

      .then((res) => setCharacter(res.data));
  }, []);
  const showCharacter = character.slice(0, 24);
  return (
    <>
      <NavBar />
      <div className="wiki-box">
        <CardListWiki character={showCharacter} />
      </div>
    </>
  );
}

export default Wiki;

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

  return (
    <>
      <NavBar />
      <div className="wiki-box">
        <CardListWiki character={character} />
      </div>
    </>
  );
}

export default Wiki;

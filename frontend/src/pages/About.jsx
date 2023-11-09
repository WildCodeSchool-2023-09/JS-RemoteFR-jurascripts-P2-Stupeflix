import NavBar from "../components/NavBar";
import CardList from "../components/about/CardList";
import "../styles/About.scss";

function About() {
  return (
    <>
      <NavBar />
      <div className="about-box">
        <CardList />
      </div>
    </>
  );
}

export default About;

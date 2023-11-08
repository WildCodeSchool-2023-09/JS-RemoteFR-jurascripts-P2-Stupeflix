import NavBar from "../components/NavBar";
import CardList from "../components/about/CardList";

function About() {
  return (
    <>
      <NavBar />
      <div className="about-us">
        Here is About Us <h2>Stupéflix</h2>!
        <span>We are 4 junior developpers</span>
        <CardList />
      </div>
    </>
  );
}

export default About;

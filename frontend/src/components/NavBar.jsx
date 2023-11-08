import { Link } from "react-router-dom";
import "../styles/NavBar.scss";

function NavBar() {
  return (
    <nav className="container-nav">
      <ul className="container-nav-ul">
        <li className="container-nav-li">
          <Link to="/" className="container-nav-link">
            Hogwarts Day
          </Link>
        </li>
        <li className="container-nav-li">
          <Link to="/wiki" className="container-nav-link">
            Wiki
          </Link>
        </li>
        <li className="container-nav-li">
          <Link to="/about" className="container-nav-link">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

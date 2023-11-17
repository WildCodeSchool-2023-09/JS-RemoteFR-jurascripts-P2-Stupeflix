import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "@react-hook/media-query";

function NavBar() {
  const isMobile = useMediaQuery("only screen and (min-width: 900px)");
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const [iconMenu, setIconMenu] = useState(true);
  const toggleIconMenu = () => {
    setIconMenu(!iconMenu);
  };

  return (
    <div>
      {isMobile ? (
        <nav className="container-nav harry-potter-font">
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
                A Propos
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <div>
          {iconMenu && (
            <IoMenu
              className="menu"
              onClick={() => {
                toggleMenu();
                toggleIconMenu();
              }}
            />
          )}
          {menu && (
            <div className="menu-open harry-potter-font">
              <IoClose
                className="close"
                onClick={() => {
                  toggleMenu();
                  toggleIconMenu();
                }}
              />
              <ul>
                <li>
                  <Link to="/" className="menu-open-link">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to="/wiki" className="menu-open-link">
                    Wiki
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="menu-open-link">
                    A Propos
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default NavBar;

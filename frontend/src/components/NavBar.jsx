import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Hogwarts Day</Link>
          </li>
          <li>
            <Link to="/wiki">Wiki</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default NavBar;

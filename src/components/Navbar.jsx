import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <nav>
      <header>
        <h1>Git</h1>
      </header>
      <ul>
        <li>
          <NavLink
            to="/"
            className={location.pathname === "/" ? "active" : "none"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/repo">Repos</NavLink>
        </li>
        <li>
          <NavLink to="/error">Error</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

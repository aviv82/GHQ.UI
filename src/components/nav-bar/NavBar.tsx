import { Link } from "react-router";
import "./navBar.css";

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-header">GHQ</div>
      <div className="nav-bar-links">
        <ul className="nav-bar-list">
          <li className="nav-bar-list-item">
            <Link to="/" className="nav-bar-link">
              home
            </Link>
          </li>
          <li className="nav-bar-list-item">
            <Link to="/games" className="nav-bar-link">
              game lobby
            </Link>
          </li>
          <li className="nav-bar-list-item">
            <Link to="user/:id/games" className="nav-bar-link">
              my games
            </Link>
          </li>
          <li className="nav-bar-list-item">
            <Link to="user/:id" className="nav-bar-link">
              profile
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-bar-user">username</div>
    </nav>
  );
};

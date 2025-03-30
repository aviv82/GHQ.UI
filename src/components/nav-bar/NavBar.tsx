import "./navBar.css";

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-header">GHQ</div>
      <div className="nav-bar-links">
        <ul className="nav-bar-list">
          <li className="nav-bar-list-item">
            <p>game lobby</p>
          </li>
          <li className="nav-bar-list-item">
            <p>my games</p>
          </li>
          <li className="nav-bar-list-item">
            <p>profile</p>
          </li>
        </ul>
      </div>
      <div className="nav-bar-user">username</div>
    </nav>
  );
};

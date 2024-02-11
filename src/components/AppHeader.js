import "./AppHeader.css";

function AppHeader() {
  return (
    <header className="header">
      <div className="header__logo-date-container">
        <img
          src="../images/WTWRlogo.svg"
          className="header__logo"
          alt="WTWR Logo"
        />
        <h2 className="header__date-location">Date/Location</h2>
      </div>
      <ul className="header__btns">
        <li>
          <a type="text" className="header__add-clothes-btn" href="#">
            +Add New Clothes
          </a>
        </li>
        <li>
          <p className="header__username">Username</p>
        </li>
        <li>
          <img
            className="header__user-avatar"
            src="../images/user-avatar.svg"
            alt="user-avatar"
          />
        </li>
      </ul>
    </header>
  );
}

export default AppHeader;

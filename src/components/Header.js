import "../blocks/Header.css";
import WTWRLogo from "../images/WTWRLogo.svg";
import userAvatar from "../images/user-avatar.svg";

function Header({ onCreateActiveModal }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
    hour: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo-date-container">
        <img src={WTWRLogo} className="header__logo" alt="WTWR Logo" />
        <h2 className="header__date-location">
          {currentDate}, Current Location
        </h2>
      </div>
      <ul className="header__btns">
        <li>
          <button
            onClick={onCreateActiveModal}
            type="text"
            className="header__add-clothes-btn"
          >
            + Add New Clothes
          </button>
        </li>
        <li>
          <p className="header__username">Username</p>
        </li>
        <li>
          <img
            className="header__user-avatar"
            src={userAvatar}
            alt="user-avatar"
          />
        </li>
      </ul>
    </header>
  );
}

export default Header;

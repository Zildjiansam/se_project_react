import { Link } from "react-router-dom/cjs/react-router-dom.min.js";
import "../blocks/Header.css";
import WTWRLogo from "../images/WTWRLogo.svg";
import userAvatar from "../images/user-avatar.svg";
import Tempswitch from "./Tempswitch.js";

function Header({ onCreateActiveModal }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
    hour: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo-date-container">
        <Link to="/">
          <img src={WTWRLogo} className="header__logo" alt="WTWR Logo" />
        </Link>
        <h2 className="header__date-location">
          {currentDate}, Current Location
        </h2>
      </div>
      <ul className="header__btns">
        <li>
          <Tempswitch />
        </li>
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
          <Link to="/profile" className="header__username">
            Username
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <img
              className="header__user-avatar"
              src={userAvatar}
              alt="user-avatar"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;

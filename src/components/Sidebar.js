import "../blocks/Sidebar.css";
import userAvatar from "../images/user-avatar.svg";

const SideBar = () => {
  return (
    <section className="sidebar__content">
      <img
        className="profile__sidebar_user-avatar"
        src={userAvatar}
        alt="user-avatar"
      />
      <p className="profile__sidebar_username">Username</p>
    </section>
  );
};

export default SideBar;

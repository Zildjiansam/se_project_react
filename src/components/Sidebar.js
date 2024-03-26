import "../blocks/Sidebar.css";
import userAvatar from "../images/user-avatar.svg";

const Sidebar = () => {
  return (
    <section className="profile__sidebar">
      <img
        className="profile__sidebar_user-avatar"
        src={userAvatar}
        alt="user-avatar"
      />
      <p className="profile__sidebar_username">Username</p>
    </section>
  );
};

export default Sidebar;

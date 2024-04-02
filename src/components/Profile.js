import "../blocks/Profile.css";
import SideBar from "./Sidebar.js";
import ClothesSection from "./ClothesSection";

const Profile = ({ items, onSelectCard }) => {
  return (
    <>
      <main className="profile__main">
        <div className="profile__sidebar">
          <SideBar />
        </div>
        <ClothesSection onSelectCard={onSelectCard} items={items} />
      </main>
    </>
  );
};

export default Profile;

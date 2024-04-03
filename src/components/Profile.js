import "../blocks/Profile.css";
import SideBar from "./Sidebar.js";
import ClothesSection from "./ClothesSection";

const Profile = ({ items, onSelectCard, onCreateActiveModal }) => {
  return (
    <>
      <main className="profile__main">
        <div className="profile__sidebar">
          <SideBar />
        </div>
        <ClothesSection
          onSelectCard={onSelectCard}
          onCreateActiveModal={onCreateActiveModal}
          items={items}
        />
      </main>
    </>
  );
};

export default Profile;

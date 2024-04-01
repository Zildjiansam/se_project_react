import "../blocks/Profile.css";
import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";

const Profile = ({ items, onSelectCard }) => {
  return (
    <>
      <main className="profile__main">
        <div className="profile__sidebar">
          <Sidebar />
        </div>
        <ClothesSection onSelectCard={onSelectCard} items={items} />
      </main>
    </>
  );
};

export default Profile;

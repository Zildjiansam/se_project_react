import "../blocks/Profile.css";
import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";

const Profile = ({ items, onSelectCard }) => {
  return (
    <>
      <main className="profile__main">
        <Sidebar />
        <ClothesSection onSelectCard={onSelectCard} items={items} />
      </main>
    </>
  );
};

export default Profile;

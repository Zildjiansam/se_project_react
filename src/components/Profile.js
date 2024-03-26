import "../blocks/Profile.css";
import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";

const Profile = ({ onSelectCard }) => {
  return (
    <>
      <main className="profile__main">
        <Sidebar />
        <ClothesSection onSelectCard={onSelectCard} />
      </main>
    </>
  );
};

export default Profile;

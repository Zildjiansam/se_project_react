import ItemCard from "./ItemCard";
import "../blocks/ClothesSection.css";
import { defaultClothingItems } from "../utils/constants";

const ClothesSection = ({ onSelectCard }) => {
  return (
    <section className="clothes-section">
      <div className="clothes-section_header">Your Items</div>
      <div className="clothes-section__item-list">
        Item Section
        {defaultClothingItems.map((item) => {
          <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />;
        })}
      </div>
    </section>
  );
};

export default ClothesSection;

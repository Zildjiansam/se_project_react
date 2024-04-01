import ItemCard from "./ItemCard";
import "../blocks/ClothesSection.css";
// import { defaultClothingItems } from "../utils/constants";

const ClothesSection = ({ items, onSelectCard }) => {
  return (
    <section className="clothes-section">
      <div className="clothes-section_header">Your Items</div>
      <div className="clothes-section__item-list">
        {items.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          );
        })}
      </div>
    </section>
  );
};

export default ClothesSection;

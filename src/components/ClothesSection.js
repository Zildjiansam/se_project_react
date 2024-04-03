import ItemCard from "./ItemCard";
import "../blocks/ClothesSection.css";

const ClothesSection = ({ items, onSelectCard, onCreateActiveModal }) => {
  return (
    <section className="clothes-section">
      <div className="clothes-section__header">
        <div className="clothes-section_header clothes-section_header_title">
          Your Items
        </div>
        <button
          type="text"
          className="clothes-section__header_add-btn"
          onClick={onCreateActiveModal}
        >
          + Add New
        </button>
      </div>
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

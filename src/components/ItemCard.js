import "../blocks/ItemCard.css";

function ItemCard({ item, onSelectCard }) {
  return (
    <li className="card">
      <h2 className="card__title">{item.name}</h2>
      <img
        onClick={() => onSelectCard(item)}
        className="card__image"
        src={item.link}
        alt="Clothing Item"
      ></img>
    </li>
  );
}

export default ItemCard;

import "../blocks/ItemModal.css";

function ItemModal({ selectedCard, OnClose }) {
  return (
    <div className={"modal"}>
      <div className="modal__item_container" onClick={OnClose}>
        <button
          className="modal__item-close-btn"
          type="button"
          onClick={OnClose}
        ></button>
        <img
          className="modal__item_photo"
          src={selectedCard.link}
          alt="Item Photo"
        />
        <div className="modal__item_name">{selectedCard.name}</div>
        <div className="modal__item_weather-type">
          <div>Weather: </div>
          <div className="modal_weather-type_type">{selectedCard.weather}</div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

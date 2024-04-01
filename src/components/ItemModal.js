import "../blocks/ItemModal.css";

function ItemModal({ selectedCard, onClose, openDeleteConfirmModal }) {
  return (
    <div className={"modal"}>
      <div className="modal__item_container">
        <button
          className="modal__item-close-btn"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__item_photo"
          src={selectedCard.imageUrl}
          alt="Item Photo"
        />
        <div className="modal__item_options">
          <div className="modal__item_info">
            <div className="modal__item_name">{selectedCard.name}</div>
            <div className="modal__item_weather-type">
              <div>Weather: </div>
              <div className="modal_weather-type_type">
                {selectedCard.weather}
              </div>
            </div>
          </div>
          <button
            className="modal__delete-item-btn"
            type="text"
            onClick={openDeleteConfirmModal}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

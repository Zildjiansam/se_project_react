import "../blocks/ItemDelConfirmModal.css";

const ItemDelConfirmModal = ({ onClose, onSubmit }) => {
  return (
    <div className="modal__delete_confirm">
      <div className="modal__delete_confirm_container">
        <p className="modal__delete-confirm_header">
          Are you sure you want to delete this item? <br /> This action is
          irreverible!
        </p>
        <button
          className="modal__btn modal__delete_confirm_btn"
          onClick={onSubmit}
        >
          Yes, delete this item
        </button>
        <button className="modal__btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ItemDelConfirmModal;

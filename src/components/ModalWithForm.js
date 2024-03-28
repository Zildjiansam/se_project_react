import "../blocks/ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  onClose,
  name,
  onSubmit,
}) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__form_container">
        <button
          className="modal__form_close-btn"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" name="new-garment-form">
          {children}
          <button
            className="modal__btn-submit"
            type="submit"
            onClick={onSubmit}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

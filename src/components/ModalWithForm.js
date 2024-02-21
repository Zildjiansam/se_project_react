import "../blocks/ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText = "Add Garment",
  title,
  OnClose,
  name,
}) {
  return (
    <div className={`modal modal_type_${name}`} onClick={OnClose}>
      <div className="modal__form_container">
        <button
          className="modal__form_close-btn"
          type="button"
          onClick={OnClose}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" name="new-garment-form">
          {children}
          <button onClick={OnClose} className="modal__btn-submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

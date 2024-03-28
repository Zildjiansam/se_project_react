import { useEffect, useState } from "react";
import "../blocks/AddItemModal.css";
import ModalWithForm from "./ModalWithForm";

const cl = console.log.bind(console);

const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  const [name, setName] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [weather, setWeather] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleUrlChange(e) {
    setimageUrl(e.target.value);
  }

  function handleWeatherChange(e) {
    setWeather(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ name: name, imageUrl: imageUrl, weather: weather });
    onCloseModal();
  }
  return (
    <ModalWithForm
      id="modal-with-form"
      title="New Garment"
      buttonText="Add New Garment"
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" type="text">
        Name
      </label>
      <input
        className="modal__input"
        name="name"
        placeholder="Name"
        onChange={handleNameChange}
      ></input>
      <label className="modal__label" type="text">
        Image
      </label>
      <input
        className="modal__input"
        url="url"
        placeholder="Image URL"
        onChange={handleUrlChange}
      ></input>
      <p className="modal__weather-type-prompt">Select the weather type:</p>
      <div className="modal__radio-btn-group">
        <div className="modal__radio-btn-label-pair">
          <input
            className="modal__radio-btn"
            id="hot"
            value="hot"
            type="radio"
            name="temp"
            onChange={handleWeatherChange}
          ></input>
          <label type="radio">Hot</label>
        </div>
        <div className="modal__radio-btn-label-pair">
          <input
            className="modal__radio-btn"
            id="warm"
            value="warm"
            type="radio"
            name="temp"
            onChange={handleWeatherChange}
          ></input>
          <label type="radio">Warm</label>
        </div>
        <div className="modal__radio-btn-label-pair">
          <input
            className="modal__radio-btn"
            id="cold"
            value="cold"
            type="radio"
            name="temp"
            onChange={handleWeatherChange}
          ></input>
          <label type="radio">Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;

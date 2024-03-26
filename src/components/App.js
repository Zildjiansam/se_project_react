import "../blocks/App.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import ModalWithForm from "./ModalWithForm.js";
import Main from "./Main.js";
import Profile from "./Profile.js";
import { useEffect, useState } from "react";
import ItemModal from "./ItemModal.js";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi.js";
import { CurrentTempUnitContext } from "../contexts/CurrentTempUnitContext.js";
import { Route } from "react-router-dom/cjs/react-router-dom.min.js";

// const cl = console.log.bind(console);
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTempUnit, setCurrentTempUnit] = useState("F");

  function handleCreateActiveModal() {
    setActiveModal("create");
  }

  function handleCloseActiveModal() {
    setActiveModal("");
  }

  function handleSelectedCard(card) {
    setActiveModal("preview");
    setSelectedCard(card);
  }

  function handleToggleSwitchChange() {
    if (currentTempUnit === "C") setCurrentTempUnit("F");
    if (currentTempUnit === "F") setCurrentTempUnit("C");
  }

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => {
        console.error(`Error ${err}`);
      });
  }, []);

  return (
    <div className="app">
      <CurrentTempUnitContext.Provider
        value={{ currentTempUnit, handleToggleSwitchChange }}
      >
        <Header onCreateActiveModal={handleCreateActiveModal} />
        <Route exact path="/">
          <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
        </Route>
        <Route path="/profile">
          <Profile onSelectCard={handleSelectedCard} />
        </Route>
        <Footer />
        {activeModal === "create" && (
          <ModalWithForm
            id="modal-with-form"
            title="New Garment"
            buttonText="Add New Garment"
            onClose={handleCloseActiveModal}
          >
            <label className="modal__label" type="text" for="name">
              Name
            </label>
            <input
              className="modal__input"
              name="name"
              placeholder="Name"
            ></input>
            <label className="modal__label" type="text" for="url">
              Image
            </label>
            <input
              className="modal__input"
              url="url"
              placeholder="Image URL"
            ></input>
            <p className="modal__weather-type-prompt">
              Select the weather type:
            </p>
            <div className="modal__radio-btn-group">
              <div className="modal__radio-btn-label-pair">
                <input
                  className="modal__radio-btn"
                  type="radio"
                  id="hot"
                  name="temp"
                ></input>
                <label for="hot" type="radio">
                  Hot
                </label>
              </div>
              <div className="modal__radio-btn-label-pair">
                <input
                  className="modal__radio-btn"
                  type="radio"
                  id="hot"
                  name="temp"
                ></input>
                <label for="hot" type="radio">
                  Warm
                </label>
              </div>
              <div className="modal__radio-btn-label-pair">
                <input
                  className="modal__radio-btn"
                  type="radio"
                  id="hot"
                  name="temp"
                ></input>
                <label for="hot" type="radio">
                  Cold
                </label>
              </div>
            </div>
          </ModalWithForm>
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseActiveModal}
          />
        )}
      </CurrentTempUnitContext.Provider>
    </div>
  );
}

export default App;

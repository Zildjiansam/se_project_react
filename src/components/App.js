import "../blocks/App.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import Profile from "./Profile.js";
import ItemModal from "./ItemModal.js";
import AddItemModal from "./AddItemModal.js";
import ItemDelConfirmModal from "./ItemDelConfirmModal.js";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi.js";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min.js";
import {
  getClothingItems,
  addClothingItem,
  deleteClothingItem,
} from "../utils/api.js";

const cl = console.log.bind(console);
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTempUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  useEffect(() => {
    getClothingItems()
      .then((res) => {
        setClothingItems(res);
      })
      .catch((res) => {
        console.log(`Error ${res}`);
      });
  }, []);

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

  function handleOpenDelConfirmModal() {
    setActiveModal("delete");
    setSelectedCard(selectedCard);
  }

  function handleToggleSwitchChange() {
    setCurrentTempUnit(currentTemperatureUnit === "F" ? "C" : "F");
  }

  function handleSubmitItem(data) {
    cl(data);
    addClothingItem(data)
      .then((res) => {
        setClothingItems((prevItems) => [res, ...prevItems]);
      })
      .catch((res) => {
        console.log(`Error ${res}`);
      });
  }
  function handleDeleteItem() {
    console.log(selectedCard._id);
    deleteClothingItem(selectedCard._id)
      .then((res) => {
        handleCloseActiveModal();
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== selectedCard._id)
        );
      })
      .catch((res) => {
        console.log(`Error ${res}`);
      });
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
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateActiveModal={handleCreateActiveModal} />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              items={clothingItems}
            />
          </Route>
          <Route path="/profile">
            <Profile onSelectCard={handleSelectedCard} items={clothingItems} />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            onCloseModal={handleCloseActiveModal}
            isOpen={activeModal === "create"}
            onAddItem={handleSubmitItem}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseActiveModal}
            openDeleteConfirmModal={handleOpenDelConfirmModal}
          />
        )}
        {activeModal === "delete" && (
          <ItemDelConfirmModal
            selectedCard={selectedCard}
            onClose={handleCloseActiveModal}
            onSubmit={handleDeleteItem}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;

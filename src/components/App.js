import "../blocks/App.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import Profile from "./Profile.js";
import AddItemModal from "./AddItemModal.js";
import { useEffect, useState } from "react";
import ItemModal from "./ItemModal.js";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi.js";
import { CurrentTempUnitContext } from "../contexts/CurrentTempUnitContext.js";
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
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  useEffect(() => {
    getClothingItems().then((res) => {
      setClothingItems(res);
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

  function handleToggleSwitchChange() {
    if (currentTempUnit === "C") setCurrentTempUnit("F");
    if (currentTempUnit === "F") setCurrentTempUnit("C");
  }

  function handleSubmitItem(data) {
    cl(data);
    addClothingItem(data).then((res) => {
      setClothingItems((prevItems) => [...prevItems, data]);
    });
  }
  // function handleDeleteItem() {
  //   deleteClothingItem()
  // }

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
          />
        )}
      </CurrentTempUnitContext.Provider>
    </div>
  );
}

export default App;

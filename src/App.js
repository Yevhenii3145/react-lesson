import styles from "./App.module.css";

import Header from "./components/Header/Header";
import CarItem from "./components/CarItem/CarItem.jsx";
import CarList from "./components/CarList/CarList.jsx";
import items from "./cars.json";

function App() {
  const [topCar] = items.filter((item) => item.istop);

  return (
    <div>
      <Header text={"Дошка оголошень"} />
      <div className={styles.containerCar}>
        <CarItem item={topCar} />
        {<CarList items={items} className={styles.carList} />}
      </div>
    </div>
  );
}

export default App;

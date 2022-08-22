import { useState, useEffect } from "react";
import "./App.css";
import { Softs } from "./components/Softs";
import { Vodkas } from "./components/Vodkas";

const App = () => {
  // const [cash, setCash] = useState(0);
  const [totalSoftIncome, setTotalSoftIncome] = useState(0);
  const [totalVodkaIncome, setTotalVodkaIncome] = useState(0);
  const [salesIncome, setSalesIncome] = useState(0);

  useEffect(() => {
    setSalesIncome((totalSoftIncome + totalVodkaIncome).toFixed(2));
  }, [totalSoftIncome, totalVodkaIncome]);

  return (
    <>
      <h1>Dochód ze sprzedaży: {salesIncome} zł</h1>
      <div className="grey">
        <h1>Napoje bezalkoholowe</h1>
        <Softs setTotalSoftIncome={setTotalSoftIncome} />
        <h2>Napoje bezalkoholowe {totalSoftIncome} zł</h2>
        <hr />
        <h1>Alkohole wysokoprocentowe</h1>
        <Vodkas setTotalVodkaIncome={setTotalVodkaIncome} />
        <h2>Alkohole wysokoprocentowe {totalVodkaIncome} zł</h2>
        {/* <Expenses item={finishCalculation} /> */}
        <h1>RAZEM: {salesIncome}</h1>
      </div>
    </>
  );
};

export default App;

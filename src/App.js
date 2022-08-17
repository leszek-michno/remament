import { useState } from "react";
import "./App.css";
import NoAlco from "./components/NoAlco";
import Vodka from "./components/Vodka";
import { softs } from "./data/Softs";
import { vodka } from "./data/NoAlco";
import Expenses from "./components/Expenses";


const App = () => {
  const finishCalculation = { name: "expenses", expenses: "" };
  const [cash, setCash] = useState(0);

  const [totalSoftIncome, setTotalSoftIncome] = useState("");
  const [totalVodkaIncome, setTotalVodkaIncome] = useState("");

  const [salesIncome, setSalesIncome] = useState("");

  
  const Vodkas = vodka.map((vodka) => <Vodka key={vodka.id} vodka={vodka} />);

  

  // zmien na useEffect with dependencies [totalSoftIncome itp, ]
  const handleIncome = () => {
    const allSofts = softs.map((soft) => soft.income);
    const totalSoft = allSofts.reduce((a, b) => a + b, 0);
    setTotalSoftIncome(totalSoft.toFixed(2));

    const allVodkas = vodka.map((vodka) => vodka.income);
    const totalVodka = allVodkas.reduce((a, b) => a + b, 0);
    setTotalVodkaIncome(totalVodka.toFixed(2));

    setSalesIncome((totalSoft + totalVodka).toFixed(2));
    
    setCash(finishCalculation.expenses);
  };

  

  return (
    <>
      <button onClick={handleIncome}>Podsumowanie</button>
      <h1>Dochód ze sprzedaży: {salesIncome} zł</h1>
      <div className="grey">
        <h1>Napoje bezalkoholowe</h1>
        {softs.map((soft) => <NoAlco key={soft.id} soft={soft} />)}
        <h2>Napoje bezalkoholowe {totalSoftIncome} zł</h2>
        <hr />
        <h1>Alkohole wysokoprocentowe</h1>
        {Vodkas}
        <h2>Alkohole wysokoprocentowe {totalVodkaIncome} zł</h2>
        <Expenses item={finishCalculation} />
        <h1>RAZEM: {cash}</h1>
      </div>
    </>
  );
};

export default App;

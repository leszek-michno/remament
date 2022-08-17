import React, { useState } from "react";


const Vodka = ({ vodka }) => {
  const [cargoBottles, setCargoBottles] = useState("");
  const [startFullBottles, setStartFullBottles] = useState("");
  const [startWeightOpenBottel, setStartWeightOpenBottle] = useState("");
  const [endFullBottles, setEndFullBottles] = useState("");
  const [endWeightOpenBottel, setEndWeightOpenBottel] = useState("");

  const cargoB = (e) => {
    setCargoBottles(e.target.value);
  };
  const startFB = (e) => {
    setStartFullBottles(e.target.value);
  };
  const startWOB = (e) => {
    setStartWeightOpenBottle(e.target.value);
  };
  const endFB = (e) => {
    setEndFullBottles(e.target.value);
  };
  const endWOB = (e) => {
    setEndWeightOpenBottel(e.target.value);
  };

  const initialState =
    startWeightOpenBottel >= vodka.emptyBottleWeight
      ? (cargoBottles * 1 + startFullBottles * 1) * vodka.alcoWeight +
        (startWeightOpenBottel * 1 - vodka.emptyBottleWeight)
      : (cargoBottles * 1 + startFullBottles * 1) * vodka.alcoWeight;

  const finalState =
    endWeightOpenBottel >= vodka.emptyBottleWeight
      ? endFullBottles * 1 * vodka.alcoWeight +
        (endWeightOpenBottel * 1 - vodka.emptyBottleWeight)
      : endFullBottles * 1 * vodka.alcoWeight;

  const multiplier = vodka.volume / 40;     

  const income = (
    ((initialState * 1 - finalState * 1) / (vodka.alcoWeight / multiplier)) *
    vodka.priceFortyM *
    1
  ).toFixed(2);

  return (
    <div>
      <p>{vodka.name}</p>
      <span>
        cena: {vodka.priceFortyM} zł {""}
      </span>
      <input
        className={cargoBottles > 0 ? "color" : " " && cargoBottles < 0 ? "alarm" : " "}
        type="number"
        value={cargoBottles}
        onChange={cargoB}
        placeholder="dostawa"
      />
      <input
        className={startFullBottles >= 0 ? "blue" : "alarm"}
        type="number"
        value={startFullBottles}
        onChange={startFB}
        placeholder="start - pełne"
      />
      <input
        className={startWeightOpenBottel >= 0 ? "blue" : "alarm"}
        type="number"
        value={startWeightOpenBottel}
        onChange={startWOB}
        placeholder="start - waga otwartej"
      />
      <input
        className={endFullBottles < 0 ? "alarm" : ""}
        type="number"
        value={endFullBottles}
        onChange={endFB}
        placeholder="pełne na koniec"
      />
      <input
        className={endWeightOpenBottel < 0 ? "alarm" : "" }
        type="number"
        value={endWeightOpenBottel}
        onChange={endWOB}
        placeholder="kaniec - waga otwartej"
      />
      <span >
        dochód w zł:{" "}
        <strong>
          {income >= 0 ? (
            (vodka.income = income * 1)
          ) : (
            <span className="alert">B Ł Ą D</span>
          )}
        </strong>
      </span>
      <hr />
    </div>
  );
};

export default Vodka;

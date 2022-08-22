import React, { useState, useEffect } from "react";

export const Item = ({ vodka, setVodkaItemIncomes }) => {
  const [cargoBottles, setCargoBottles] = useState(0);
  const [startFullBottles, setStartFullBottles] = useState(0);
  const [startWeightOpenBottel, setStartWeightOpenBottle] = useState(0);
  const [endFullBottles, setEndFullBottles] = useState(0);
  const [endWeightOpenBottel, setEndWeightOpenBottel] = useState(0);

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

  const income =
    ((initialState - finalState) / (vodka.alcoWeight / multiplier)) *
    vodka.priceFortyM;

  useEffect(() => {
    setVodkaItemIncomes((previousSoftIncomes) => {
      const newSoftIncomes = { ...previousSoftIncomes };
      newSoftIncomes[vodka.id] = income;
      return newSoftIncomes;
    });
  }, [income, setVodkaItemIncomes, vodka]);

  return (
    <div>
      <p>{vodka.name}</p>
      <span>
        cena: {vodka.priceFortyM} zł {""}
      </span>
      <input
        className={
          cargoBottles > 0 ? "color" : " " && cargoBottles < 0 ? "alarm" : " "
        }
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
        className={endWeightOpenBottel < 0 ? "alarm" : ""}
        type="number"
        value={endWeightOpenBottel}
        onChange={endWOB}
        placeholder="kaniec - waga otwartej"
      />
      <span>
        dochód w zł:{" "}
        <strong>
          {income >= 0 ? income : <span className="alert">B Ł Ą D</span>}
        </strong>
      </span>
      <hr />
    </div>
  );
};

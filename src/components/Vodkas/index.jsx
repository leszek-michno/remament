import { useState, useEffect } from "react";

import { vodkas, initialItemsState } from "../../data/Vodkas";
import { Item } from "./Item";

export const Vodkas = ({ totalSoftIncome, setTotalVodkaIncome }) => {
  const [vodkaItemIncomes, setVodkaItemIncomes] = useState(initialItemsState);

  useEffect(() => {
    const incomes = Object.entries(vodkaItemIncomes).map(
      ([id, income]) => income
    );
    const totalIncome = incomes.reduce((a, b) => a + b, 0);
    setTotalVodkaIncome(totalIncome);
  }, [vodkaItemIncomes, setTotalVodkaIncome]);

  return vodkas.map((vodka) => (
    <Item
      key={vodka.id}
      vodka={vodka}
      setVodkaItemIncomes={setVodkaItemIncomes}
    />
  ));
};

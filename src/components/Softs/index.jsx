import { useState, useEffect } from "react";

import { softs, initialItemsState } from "../../data/Softs";
import { Item } from "./Item";

export const Softs = ({ totalSoftIncome, setTotalSoftIncome }) => {
  const [softItemIncomes, setSoftItemIncomes] = useState(initialItemsState);

  useEffect(() => {
    const incomes = Object.entries(softItemIncomes).map(
      ([id, income]) => income
    );
    const totalIncome = incomes.reduce((a, b) => a + b, 0);
    setTotalSoftIncome(totalIncome);
  }, [softItemIncomes, setTotalSoftIncome]);

  return softs.map((soft) => (
    <Item key={soft.id} soft={soft} setSoftItemIncomes={setSoftItemIncomes} />
  ));
};

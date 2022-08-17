import React from "react";
import { useState } from "react";
import "../styles/Expenses.css";

const Expenses = ({item}) => {
  const [priceOne, setPriceOne] = useState(0);
  const [priceTwo, setPriceTwo] = useState(0);
  const [expensesOne, setExpensesOne] = useState(0);
  const [expensesTwo, setExpensesTwo] = useState(0);
  const [expensesThree, setExpensesThree] = useState(0);
  const [expensesFour, setExpensesFour] = useState(0);
  const [expensesFive, setExpensesFive] = useState(0);
  

  
   const expenses = expensesOne * 1 +
        expensesTwo * 1 +
        expensesThree * 1 +
        expensesFour * 1 +
        expensesFive * 1 +
        priceOne * 1 +
        priceTwo * 1;
 

  return (
    <div className="expenses">
      <h1>Wydatki</h1>
      <label>wynagrodzenie barmana</label>
      <input
        type="number"
        value={priceOne}
        onChange={(e) => setPriceOne(e.target.value)}
      />
      <br />
      <label>wynagrodzenie barmana</label>
      <input
        type="number"
        value={priceTwo}
        onChange={(e) => setPriceTwo(e.target.value)}
      />
      <br />
      <label>inne wydatki</label>
      <input
        type="number"
        value={expensesOne}
        onChange={(e) => setExpensesOne(e.target.value)}
      />
      <br />
      <label>inne wydatki</label>
      <input
        type="number"
        value={expensesTwo}
        onChange={(e) => setExpensesTwo(e.target.value)}
      />
      <br />
      <label>inne wydatki</label>
      <input
        type="number"
        value={expensesThree}
        onChange={(e) => setExpensesThree(e.target.value)}
      />
      <br />
      <label>inne wydatki</label>
      <input
        type="number"
        value={expensesFour}
        onChange={(e) => setExpensesFour(e.target.value)}
      />
      <br />
      <label>inne wydatki</label>
      <input
        type="number"
        value={expensesFive}
        onChange={(e) => setExpensesFive(e.target.value)}
      />
      <br />
   <h2>RAZEM</h2> 
   <span> {item.expenses = expenses}
  </span>
    </div>
  );
};

export default Expenses;

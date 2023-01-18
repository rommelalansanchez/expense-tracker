import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpensesList = [
  { title: "Car Insurance 2333", amount: 11111, date: new Date(2022, 2, 22) },
  { title: "Supplies 2", amount: 2222.39, date: new Date(2021, 2, 23) },
  { title: "Meal 2", amount: 33333.39, date: new Date(2023, 2, 24) },
  { title: "Shoes 2", amount: 4444.39, date: new Date(2021, 2, 25) },
];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpensesList);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    console.log("In app js");
    console.log(expense);
  };
  return (
    <div className="expenses">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;

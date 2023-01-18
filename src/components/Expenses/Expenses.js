import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [selectedFilterYear, setFilterYear] = useState("2020");

  const onFilterChangeHandler = (selectedYear) => {
    console.log("Filtered changed to:" + selectedYear);
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilterYear;
  });

  return (
    <div>
      <h2 className="title">Expense Tracker</h2>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedFilterYear}
          onFilterChange={onFilterChangeHandler}
        ></ExpensesFilter>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;

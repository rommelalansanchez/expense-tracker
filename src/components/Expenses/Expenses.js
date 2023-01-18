import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
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
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}

export default Expenses;

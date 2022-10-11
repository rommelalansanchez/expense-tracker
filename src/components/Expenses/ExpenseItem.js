import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  var amount = props.amount.toLocaleString();

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    console.log("clicked");
    setTitle("updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Click me</button>
    </Card>
  );
};

export default ExpenseItem;

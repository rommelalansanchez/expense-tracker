import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHander = (enteredExpenseData) => {
    const expensedata = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expensedata);
    props.onAddExpense(expensedata);
  };

  const isEditingHandler = () => {
    if (isEditing) setIsEditing(false);
    else setIsEditing(true);
  };

  return (
    <div className="new-expense">
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHander}
          onCancelEditing={isEditingHandler}
        ></ExpenseForm>
      )}
      {!isEditing && (
        <button onClick={isEditingHandler}>Add new Expense</button>
      )}
    </div>
  );
};

export default NewExpense;

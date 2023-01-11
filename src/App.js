import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 237.39, date: new Date(2021, 2, 22) },
    { title: "Supplies", amount: 3337.39, date: new Date(2021, 2, 23) },
    { title: "Meal", amount: 27.39, date: new Date(2021, 2, 24) },
    { title: "Shoes", amount: 223.39, date: new Date(2021, 2, 25) },
  ];
  const addExpenseHandler = (expense) => {
    console.log("In app js");
    console.log(expenses);
  };
  return (
    <div className="expenses">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;

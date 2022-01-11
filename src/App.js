import "./App.css";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const DUMMY_EXPENSES = [
    { id: 'i1',title: "Car Insurance", amount: 294.67, date: new Date(2022, 1, 8) },
    { id: 'i2',title: "Book", amount: 29.67, date: new Date(2022, 1, 8) },
    { id: 'i3',title: "Table", amount: 94.67, date: new Date(2022, 1, 8) },
    { id: 'i4',title: "Chair", amount: 24.67, date: new Date(2022, 1, 8) },
  ];
  const [expenses, setexpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setexpenses(prevExpenses=>{
      return[expense,...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;

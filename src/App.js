import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App=()=> {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2022, 1, 8) },
    { title: "Book", amount: 29.67, date: new Date(2022, 1, 8) },
    { title: "Table", amount: 94.67, date: new Date(2022, 1, 8) },
    { title: "Chair", amount: 24.67, date: new Date(2022, 1, 8) },
  ];
  const addExpenseHandler= expense =>{
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>

    </div>
  );
}

export default App;

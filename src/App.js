import React, { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/Forms/NewExpense";
const initialExpenses = [];
const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expensesData={expenses}></Expenses>
    </div>
  );
};

export default App;

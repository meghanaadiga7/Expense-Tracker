import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [initialState, setInitialState] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setInitialState(false);
  };

  const startStateHandling = () => {
    setInitialState(true);
  };

  const stopStateHandling = () => {
    setInitialState(false);
  };

  return (
    <div className="new-expense">
      {initialState === false ? (
        <button onClick={startStateHandling}>Add Expense</button>
      ) : (
        <ExpenseForm
          onCancel={stopStateHandling}
          onSaveExpenseData={saveExpenseDataHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};
export default NewExpense;

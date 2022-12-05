import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import "./ExpensesList.css";
const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2022");
  const yearChangeHandler = (year) => {
    setEnteredYear(year);
  };

  const filteredExpenses = props.expensesData.filter((exp) => {
    return exp.date.getFullYear().toString() === enteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter onSaveYear={yearChangeHandler}></ExpenseFilter>
      <ExpensesChart expense={filteredExpenses}></ExpensesChart>
      {filteredExpenses.length === 0 ? (
        <h2 className="expenses-list__fallback">No Expenses Found!!</h2>
      ) : (
        filteredExpenses.map((expenseItem) => (
          <ExpenseItem
            key={expenseItem.id}
            title={expenseItem.title}
            amount={expenseItem.amount}
            date={expenseItem.date}
          ></ExpenseItem>
        ))
      )}
    </Card>
  );
};
export default Expenses;

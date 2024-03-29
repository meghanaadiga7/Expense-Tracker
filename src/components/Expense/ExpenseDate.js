import React from "react";
import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const dat = props.date.toLocaleString("en-us", { day: "2-digit" });
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{dat}</div>
    </div>
  );
};
export default ExpenseDate;

import React from "react";
import ExpenseForm from "./Form";
import "./NewExpenses.css";
const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expneseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expneseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpensedata={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpenses;

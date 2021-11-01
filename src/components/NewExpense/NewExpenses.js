import React, { useState } from "react";
import ExpenseForm from "./Form";
import "./NewExpenses.css";
const NewExpenses = (props) => {
  const [isEditing, setIsediting] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expneseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expneseData);
    setIsediting(false);
  };
  const setEditingHandler = () => {
    setIsediting(true);
  };
  const seteditingCancelHandler = () => {
    setIsediting(false);
  };
  console.log(isEditing);
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={setEditingHandler}>Add an expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpensedata={saveExpenseDataHandler}
          onCancel={seteditingCancelHandler}
        />
      )}
    </div>
  );
};
export default NewExpenses;

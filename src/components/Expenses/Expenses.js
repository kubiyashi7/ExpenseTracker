import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
const Expenses = (props) => {
  const [filtered, selectFiltered] = useState("2020");
  const yearsubmitHandler = (selectedYear) => {
    selectFiltered(selectedYear);
  };
  return (
    <div>
      <Card className="expense">
        <ExpenseFilter filter={filtered} onChangeFilter={yearsubmitHandler} />
        {props.item.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;

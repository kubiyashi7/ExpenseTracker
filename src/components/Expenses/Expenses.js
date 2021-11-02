import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filtered, selectFiltered] = useState("2020");
  const yearsubmitHandler = (selectedYear) => {
    selectFiltered(selectedYear);
  };
  const filteredYear = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filtered;
  });

  return (
    <div>
      <Card className="expense">
        <ExpenseFilter filter={filtered} onChangeFilter={yearsubmitHandler} />
        <ExpensesChart expenses={filteredYear} />
        <ExpensesList item={filteredYear} />
      </Card>
    </div>
  );
};
export default Expenses;

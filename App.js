import "./App.css";
import ExpenseForm from "../src/components/ExpenseInput/ExpenseForm";
import AllExpenses from "./components/Expense/AllExpenses";
import { useState } from "react";

let App = () => {
  let [data, setData] = useState([{ title: "food" , date : new Date() , amount:"500"}]);

  let newDataHandler = (newExpense) => {
    setData((oldData) => {
      console.log(oldData);
      return [newExpense , ...oldData]
    });
  };

  return (
    <div>
      <ExpenseForm onAddExpense={newDataHandler}></ExpenseForm>
      <AllExpenses allData={data}></AllExpenses>
    </div>
  );
};

export default App;

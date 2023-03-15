import "./App.css";
import ExpenseForm from "../src/components/ExpenseInput/ExpenseForm";
import AllExpenses from "./components/Expense/AllExpenses";
import { useState } from "react";
import ExpenseFilter from "../src/components/Expense/ExpenseFilter" ;

let App = () => {
  let [data, setData] = useState([{ title: "food" , date : new Date() , amount:"500"}]);

  let AddExpenseHandler = (newExpense) => {
    setData((oldData) => {
      
      return [newExpense , ...oldData]
    });
  };

  let [selectedYear , setYear] = useState("2020")
  let yearChangeHandler  = (year)=>{
       setYear(year)
      

  }

  return (
    <div>
      <ExpenseForm onAddExpense={AddExpenseHandler}></ExpenseForm>
      <ExpenseFilter selectedYear={selectedYear} onYearChange={yearChangeHandler}></ExpenseFilter>
      <AllExpenses allData={data} selectedYear={selectedYear}></AllExpenses>
    </div>
  );
};

export default App;

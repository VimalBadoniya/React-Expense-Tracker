import "./App.css";
import ExpenseDate from "./components/ExpenseDate";
import ExpenseDetails from "./components/ExpenseDetails";
import "./styles/ExpenseElement.css";
import React from "react";

let App = () => {
  let data = [
    {
      date: new Date(2022, 2, 15).toISOString(),
      Amount: 500,
      Details: "Lunch",
      Expense_Location: "India",
    },
    {
      date: new Date(2022, 2, 16).toISOString(),
      Amount: 600,
      Details: "Dinner",
      Expense_Location: "USA",
    },
    {
      date: new Date(2022, 2, 17).toISOString(),
      Amount: 700,
      Details: "Breakfast",
      Expense_Location: "France",
    },
  ];

  let DivKey = 500;
  let GetDivKey = () => {
    DivKey++;
    return DivKey;
  };

  let clickHandler = () =>{
    console.log("Delete button clicked")
  }

  let Alldiv = [];
  for (let i = 0; i <= 2; i++) {
    Alldiv.push(
      <div className="expense-item" id={GetDivKey()}>
        <ExpenseDetails
          Expense_amount={data[i].Amount}
          Expense_details={data[i].Details}
        ></ExpenseDetails>
        <ExpenseDate Expense_date={data[i].date}></ExpenseDate>
      <button onClick={clickHandler} className="expense-item__price">Delete</button>
      </div>
    );
  }

  return Alldiv;
}


export default App;

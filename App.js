import "./App.css";

import ExpenseDetails from "./components/ExpenseDetails";
import "./UI and styles/ExpenseElement.css";
import React from "react";

let App = () => {
  let data = [
    {
      date: new Date(2022, 2, 15),
      Amount: 500,
      Details: "Lunch",
      Expense_Location: "India",
    },
    {
      date: new Date(2022, 2, 16),
      Amount: 600,
      Details: "Dinner",
      Expense_Location: "USA",
    },
    {
      date: new Date(2022, 2, 17),
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



  let Alldiv = [];
  for (let i = 0; i <= 2; i++) {
    Alldiv.push(
      <div className="expense-item" id={GetDivKey()}>
        <ExpenseDetails
          Expense_amount={data[i].Amount}
          Expense_details={data[i].Details}
          Expense_date={data[i].date}
        ></ExpenseDetails>
        
      
      </div>
    );
  }

  return Alldiv;
}


export default App;

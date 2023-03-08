import { useState } from "react";
import "../UI and styles/ExpenseElement.css";
import ExpenseDate from "./ExpenseDate";

let ExpenseDetails = (props) =>   {
  let [amount , newAmount] = useState(props.Expense_amount) ; 
  let clickHandler = () =>{
    newAmount("100")
  }
  return (
    <div className="expense-item__description">
      <div className="expense-item__price">${amount}</div>
      <div className="expense-item__price">{props.Expense_details}</div>
      <ExpenseDate Expense_date = {props.Expense_date}></ExpenseDate>
      <button onClick={clickHandler} className="expense-item__price">Delete</button>
    </div>
  );
}
export default ExpenseDetails;

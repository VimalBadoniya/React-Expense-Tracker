import { useState } from "react";
import "./NewInput.css";
let ExpenseForm = (props) => {
  let [enteredTtitle, setEnteredTitle] = useState("");
  let titleChangeHandler = (event) => {
    console.log(event);
    setEnteredTitle(event.target.value);
  };

  let [enteredAmount, setEnteredAmount] = useState("");
  let amountChangeHandler = (event) => {
    console.log(event);
    setEnteredAmount(event.target.value);
  };

  let [enteredDate, setEnteredDate] = useState("");
  let dateChangeHandler = (event) => {
    console.log(event);
    setEnteredDate(event.target.value);
  };

  let expenseData = {
    title: enteredTtitle,
    amount: enteredAmount,
    date: new Date(enteredDate),
  };

  let submitHandler = (eve) => {
    eve.preventDefault();
    
    console.log(expenseData);
    setEnteredAmount(""); //after using the data , clear the input field
    setEnteredDate("");
    setEnteredTitle("");
  };
props.mydata(expenseData)
  return (
    <form onSubmit={submitHandler}>
      <div className="ad">
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            className="input"
            min="1"
            step="1"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            className="input"
            min="2019-01-01"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>

      <div className="ds">
        <div>
          <label htmlFor="details">Details</label>
          <input
            type="text"
            id="details"
            className="input"
            onChange={titleChangeHandler}
            value={enteredTtitle}
          />
        </div>

        <div>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;

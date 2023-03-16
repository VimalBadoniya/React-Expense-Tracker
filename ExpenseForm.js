import { useState } from "react";
import "./ExpenseForm.css";

let ExpenseForm = (props) => {
  let [enteredTitle, setEnteredTitle] = useState("");
  let titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  let [enteredAmount, setEnteredAmount] = useState("");
  let amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  let [enteredDate, setEnteredDate] = useState("");
  let dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  let newExpense = {
    title: enteredTitle,
    amount: enteredAmount,
    date: new Date(enteredDate),
  };

  let submitHandler = (eve) => {
    eve.preventDefault();
    props.onAddExpense(newExpense);
    setEnteredAmount(""); //after using the data , clear the input field
    setEnteredDate("");
    setEnteredTitle("");
  };

  const cancelHandler = (e) =>{
    e.preventDefault();
    props.onCancel();

  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense">
        <div>
          <label htmlFor="amount" className="new-expense__control label">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="new-expense__control input"
            min="1"
            step="1"
            onChange={amountChangeHandler}
            value={enteredAmount}
            required
          />
        </div>

        <div className="">
          <label htmlFor="date" className="new-expense__control label">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="new-expense__control input"
            min="2019-01-01"
            onChange={dateChangeHandler}
            value={enteredDate}
            required
          />
        </div>

        <div>
          <label htmlFor="details" className="new-expense__control label">
            Details
          </label>
          <input
            type="text"
            id="details"
            className="new-expense__control input"
            onChange={titleChangeHandler}
            value={enteredTitle}
            required
          />
        </div>

        <div className="button">
          <button onClick={cancelHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;

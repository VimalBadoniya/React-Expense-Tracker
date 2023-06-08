import React, { useState } from "react";
import { addExpense } from "../redux/ExpenseSlice";
import { useDispatch } from "react-redux";

const Form = () => {
  const [enteredExpense, setExpense] = useState("");
  const [enteredAmount, setAmount] = useState();
  const dispatch = useDispatch();
  const expenseChangeHandler = (e) => {
    setExpense(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(addExpense({ expense: enteredExpense, amount: enteredAmount }));
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="expense"
        placeholder="Expense Name"
        onChange={expenseChangeHandler}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Expense Amount"
        onChange={amountChangeHandler}
        required
      />
      <button>Add</button>
    </form>
  );
};

export default Form;

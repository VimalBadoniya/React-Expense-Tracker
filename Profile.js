import React from "react";
import Form from "./Form";
import Expenses from "./Expenses";
import { logout } from "../redux/ExpenseSlice";
import { useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const logoutButtonHandler = () => {
    dispatch(logout());
  };
  return (
    <React.Fragment>
      <header>
        <span>
          <h1>Expense Tracker</h1>
        </span>
        <span>
          <button onClick={logoutButtonHandler}>Logout</button>
        </span>
      </header>
      <main>
        <Form />
        <Expenses />
      </main>
    </React.Fragment>
  );
};

export default Profile;

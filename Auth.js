import React, { useRef, useState } from "react";
import { signup, login } from "../redux/ExpenseSlice";
import { useDispatch, useSelector } from "react-redux";

const Auth = () => {
  const errorMessage = useSelector((state) => {
    return state.loginStatus.error;
  });
  console.log(errorMessage);
  if (errorMessage) {
    console.log("there is error");
  } else {
    console.log("no error");
  }
  const [showLogin, setShowLogin] = useState("block");
  const [showSignup, setShowSignup] = useState("none");
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const loginButtonHandler = () => {
    setShowLogin("block");
    setShowSignup("none");
  };
  const signupButtonHandler = () => {
    setShowSignup("block");
    setShowLogin("none");
  };
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const obj = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };
    dispatch(login(obj));
  };
  const signupSubmitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const obj = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };
    dispatch(signup(obj));
  };

  return (
    <React.Fragment>
      <header>
        <h2>Expense Tracker</h2>
        <nav>
          <button onClick={loginButtonHandler}>Login</button>
          <button onClick={signupButtonHandler}>Signup</button>
        </nav>
      </header>
      <main>
        <div className="container">
          <form>
            <h2>
              {showLogin === "block"
                ? "Welcome Back User"
                : "New User ? Please Signup"}
            </h2>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              required
              autoComplete="on"
              ref={emailRef}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              required
              autoComplete="on"
              ref={passwordRef}
            />
            {errorMessage && <h3>{errorMessage.message}</h3>}
            <button style={{ display: showLogin }} onClick={loginSubmitHandler}>
              Login
            </button>
            <button
              style={{ display: showSignup }}
              onClick={signupSubmitHandler}
            >
              Signup
            </button>
          </form>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Auth;

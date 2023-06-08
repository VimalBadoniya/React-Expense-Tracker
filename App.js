import React, { useEffect } from "react";
import Auth from "./components/Auth";
import Profile from "./components/Profile";
import { useSelector } from "react-redux";
import { initialLoading } from "./redux/ExpenseSlice";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => {
    return state.loginStatus.status;
  });
  const loginStatus = localStorage.getItem("login");
  useEffect(() => {
    if (loginStatus) {
      console.log("login true");
      console.log(localStorage.getItem("token"));
      dispatch(initialLoading());
    } else {
      console.log("login false");
    }
  }, []);

  return (
    <React.Fragment>
      {!currentState && <Auth />}
      {currentState && <Profile />}
    </React.Fragment>
  );
}

export default App;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signup = createAsyncThunk("signupAction", async (obj) => {
  const response = await fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAktK8gV4fKTIBA2Agv7w3yNnTcHgr3ass",
    {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  return data;
});

export const login = createAsyncThunk("loginAction", async (obj) => {
  const response = await fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAktK8gV4fKTIBA2Agv7w3yNnTcHgr3ass",
    {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  return data;
});

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    allExpense: [],
    loginStatus: { status: false, token: null, error: null },
  },
  reducers: {
    addExpense: (state, action) => {
      return { ...state, allExpense: [...state.allExpense, action.payload] };
    },
    logout: (state, action) => {
      localStorage.removeItem("login");
      localStorage.removeItem("token");
      return {
        ...state,
        loginStatus: { status: false, token: null, error: null },
      };
    },
    initialLoading: (state, action) => {
      const loginToken = localStorage.getItem("token");
      return {
        ...state,
        loginStatus: { status: true, token: loginToken, error: null },
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      console.log(action.payload);
      localStorage.setItem("login", true);
      localStorage.setItem("token", action.payload.idToken);
      return {
        ...state,
        loginStatus: { status: true, token: action.payload.idToken , error : null},
      };
    });
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload.idToken) {
        localStorage.setItem("login", true);
        localStorage.setItem("token", action.payload.idToken);
        return {
          ...state,
          loginStatus: { status: true, token: action.payload.idToken , error : null},
        };
      }
      if (action.payload.error) {
        console.log(action.payload.error.message);
        return {
          ...state,
          loginStatus: {
            status: false,
            token: null,
            error: action.payload.error,
          },
        };
      }
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});
export const { addExpense, logout, initialLoading } = expenseSlice.actions;
export default expenseSlice.reducer;

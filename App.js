import "./App.css";
import ExpenseDate from "./components/ExpenseDate";
import ExpenseDetails from "./components/ExpenseDetails";
import "./components/ExpenseDetails.css";

function App() {
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

  let ExKey = 500;
  let Getkey = () => {
    ExKey++;
    return ExKey;
  };

  let AllExpenseDetails = [];
  for (let i = 0; i <= 2; i++) {
    AllExpenseDetails.push(
      <div key={i}>
        <ExpenseDetails
          key={i}
          Expense_amount={data[i].Amount}
          Expense_details={data[i].Details}
        ></ExpenseDetails>
        <ExpenseDate key={Getkey()} Expense_date={data[i].date}></ExpenseDate>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div className="container">
        <ExpenseDetails
          key={0}
          Expense_amount={data[0].Amount}
          Expense_details={data[0].Details}
        ></ExpenseDetails>
        <ExpenseDate key={Getkey()} Expense_date={data[0].date}></ExpenseDate>
      </div>

      <div className="container">
        <ExpenseDetails
          key={1}
          Expense_amount={data[1].Amount}
          Expense_details={data[1].Details}
        ></ExpenseDetails>
        <ExpenseDate key={Getkey()} Expense_date={data[1].date}></ExpenseDate>
      </div>

      <div className="container">
        <ExpenseDetails
          key={2}
          Expense_amount={data[2].Amount}
          Expense_details={data[2].Details}
        ></ExpenseDetails>
        <ExpenseDate key={Getkey()} Expense_date={data[2].date}></ExpenseDate>
      </div>
    </div>
  );
}

export default App;

import './App.css';

import GetData from './components/Getdata';


function App() {
  let data = [
    { date : new Date(2022,2,15).toISOString(), Amount : 500 ,Details : "Lunch" } ,
    { date : new Date(2022,2,16).toISOString(), Amount : 600 ,Details : "Dinner" } ,
    { date : new Date(2022,2,17).toISOString(), Amount : 700 ,Details : "Breakfast" }
  ] ;

  
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      
      <GetData Expense_date = {data[0].date}  Expense_amount={data[0].Amount} Expense_details = {data[0].Details}></GetData>
      <GetData Expense_date = {data[1].date}  Expense_amount={data[1].Amount} Expense_details = {data[1].Details}></GetData>
      <GetData Expense_date = {data[2].date}  Expense_amount={data[2].Amount} Expense_details = {data[2].Details}></GetData>
    </div>
  );
}

export default App;

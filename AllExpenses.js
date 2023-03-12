import Expense from "./Expense";
import "../ExpenseInput/ExpenseForm.css"

let AllExpenses = (props) => {
  
console.log(props.allData)

function getKey(){
    let a = Math.random();
    return a ;
}

let AllexpenseData = []
  for (let i = 0; i < props.allData.length; i++) {
    AllexpenseData.push(
        <div className="new-expense" key={getKey()}><Expense 
        Expense_amount={props.allData[i].amount}
        Expense_title={props.allData[i].title}
        Expense_date={props.allData[i].date}
      ></Expense></div>
      
    );
  }

  return AllexpenseData ;
  
};

export default AllExpenses;
